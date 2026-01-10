import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md bg-secondary border-white/10 text-center">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2 justify-center text-destructive">
            <AlertCircle className="h-12 w-12" />
          </div>

          <h1 className="text-4xl font-bold text-white mb-2 font-display">404</h1>
          <h2 className="text-xl font-semibold text-gray-200 mb-4">Página Não Encontrada</h2>
          
          <p className="min-h-[60px] text-gray-400 mb-8">
            Parece que a página que você está procurando não existe ou foi movida.
          </p>

          <Link href="/" className="bg-primary text-background font-bold py-3 px-8 rounded hover:bg-primary/90 transition-all inline-block uppercase tracking-wide">
            Voltar ao Início
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
