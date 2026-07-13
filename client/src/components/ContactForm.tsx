import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, MessageCircle } from "lucide-react";
import { COMPANY } from "@/data/site-data";
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

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter ao menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "Mensagem deve ter ao menos 10 caracteres"),
});

type ContactData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data: ContactData) => {
    const text = encodeURIComponent(
      `Olá! Meu nome é ${data.name} (${data.email}).\n\n${data.message}`
    );
    window.open(
      `https://wa.me/${COMPANY.whatsapp}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-secondary/30 backdrop-blur-sm p-8 rounded-lg border border-white/5">
      <h3 className="font-display text-2xl font-bold text-white mb-2">
        Envie uma Mensagem
      </h3>
      <p className="text-muted-foreground mb-8">
        Solicite um orçamento ou tire suas dúvidas.
      </p>

      {submitted && (
        <div className="mb-6 flex items-center gap-3 bg-primary/10 border border-primary/30 text-primary px-4 py-3 rounded-sm">
          <MessageCircle className="w-5 h-5 flex-shrink-0" />
          <span className="font-medium text-sm">
            Redirecionando para o WhatsApp...
          </span>
        </div>
      )}

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
            className="w-full bg-primary text-background font-bold py-4 rounded-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-2 uppercase tracking-wide"
          >
            Enviar via WhatsApp <Send className="w-5 h-5" />
          </button>
        </form>
      </Form>
    </div>
  );
}
