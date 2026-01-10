import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useContactForm } from "@/hooks/use-site-data";
import { Loader2, Send } from "lucide-react";
import { insertMessageSchema } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const mutation = useContactForm();
  
  const form = useForm<z.infer<typeof insertMessageSchema>>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: z.infer<typeof insertMessageSchema>) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <div className="bg-secondary/30 backdrop-blur-sm p-8 rounded-lg border border-white/5">
      <h3 className="font-display text-2xl font-bold text-white mb-2">Envie uma Mensagem</h3>
      <p className="text-muted-foreground mb-8">Solicite um orçamento ou tire suas dúvidas.</p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Nome Completo</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Seu nome" 
                    {...field} 
                    className="bg-black/40 border-white/10 focus:border-primary text-white h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="seu@email.com" 
                    {...field} 
                    className="bg-black/40 border-white/10 focus:border-primary text-white h-12"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-300">Mensagem</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Descreva o serviço que você precisa..." 
                    {...field} 
                    className="bg-black/40 border-white/10 focus:border-primary text-white min-h-[150px] resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <button
            type="submit"
            disabled={mutation.isPending}
            className="w-full bg-primary text-background font-bold py-4 rounded-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-2 uppercase tracking-wide"
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Enviando...
              </>
            ) : (
              <>
                Enviar Mensagem <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      </Form>
    </div>
  );
}
