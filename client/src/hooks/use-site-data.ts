import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertMessage } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

// Services Hook
export function useServices() {
  return useQuery({
    queryKey: [api.services.list.path],
    queryFn: async () => {
      const res = await fetch(api.services.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch services");
      return api.services.list.responses[200].parse(await res.json());
    },
  });
}

// Partners Hook
export function usePartners() {
  return useQuery({
    queryKey: [api.partners.list.path],
    queryFn: async () => {
      const res = await fetch(api.partners.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch partners");
      return api.partners.list.responses[200].parse(await res.json());
    },
  });
}

// Portfolio Hook
export function usePortfolio() {
  return useQuery({
    queryKey: [api.portfolio.list.path],
    queryFn: async () => {
      const res = await fetch(api.portfolio.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch portfolio");
      return api.portfolio.list.responses[200].parse(await res.json());
    },
  });
}

// Contact Form Hook
export function useContactForm() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      // Validate with shared schema before sending
      const validated = api.contact.submit.input.parse(data);
      
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
        credentials: "include",
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to send message");
      }
      
      return api.contact.submit.responses[200].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Mensagem Enviada!",
        description: "Entraremos em contato em breve.",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Erro no envio",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
