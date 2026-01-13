import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Services
  app.get(api.services.list.path, async (req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  // Partners
  app.get(api.partners.list.path, async (req, res) => {
    const partners = await storage.getPartners();
    res.json(partners);
  });

  // Portfolio
  app.get(api.portfolio.list.path, async (req, res) => {
    const items = await storage.getPortfolio();
    res.json(items);
  });

  // Contact
  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      await storage.createMessage(input);
      res.json({ success: true });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed data if empty
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingServices = await storage.getServices();
  if (existingServices.length === 0) {
    await storage.createService({
      title: "Martelinho de Ouro",
      description: "Técnica artesanal para desamassar lataria sem danificar a pintura original.",
      imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
    });
    await storage.createService({
      title: "Polimento Técnico",
      description: "Recuperação do brilho e remoção de microrriscos da pintura.",
      imageUrl: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop"
    });
    await storage.createService({
      title: "Vitrificação",
      description: "Proteção cerâmica de alta durabilidade para a pintura do seu veículo.",
      imageUrl: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop"
    });
  }

  const existingPortfolio = await storage.getPortfolio();
  if (existingPortfolio.length === 0) {
    await storage.createPortfolioItem({
      title: "Honda Civic - Recuperação de Teto e Traseira",
      beforeImageUrl: "/images/portfolio/civic-antes-1.jpg",
      afterImageUrl: "/images/portfolio/civic-depois-1.jpg"
    });
    await storage.createPortfolioItem({
      title: "Nissan Sentra - Colisão Frontal",
      beforeImageUrl: "/images/portfolio/sentra-antes-1.jpg",
      afterImageUrl: "/images/portfolio/sentra-depois-1.jpg"
    });
    await storage.createPortfolioItem({
      title: "VW Voyage - Recuperação Lateral e Frente",
      beforeImageUrl: "/images/portfolio/voyage-antes-1.jpg",
      afterImageUrl: "/images/portfolio/voyage-depois-1.jpg"
    });
  }
}
