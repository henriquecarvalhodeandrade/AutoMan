import { db } from "./db";
import {
  services,
  partners,
  portfolio,
  messages,
  type Service,
  type InsertService,
  type Partner,
  type InsertPartner,
  type PortfolioItem,
  type InsertPortfolioItem,
  type Message,
  type InsertMessage
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getServices(): Promise<Service[]>;
  createService(service: InsertService): Promise<Service>;
  getPartners(): Promise<Partner[]>;
  createPartner(partner: InsertPartner): Promise<Partner>;
  getPortfolio(): Promise<PortfolioItem[]>;
  createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem>;
  createMessage(message: InsertMessage): Promise<Message>;
}

export class DatabaseStorage implements IStorage {
  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async createService(service: InsertService): Promise<Service> {
    const [newService] = await db.insert(services).values(service).returning();
    return newService;
  }

  async getPartners(): Promise<Partner[]> {
    return await db.select().from(partners);
  }

  async createPartner(partner: InsertPartner): Promise<Partner> {
    const [newPartner] = await db.insert(partners).values(partner).returning();
    return newPartner;
  }

  async getPortfolio(): Promise<PortfolioItem[]> {
    return await db.select().from(portfolio);
  }

  async createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem> {
    const [newItem] = await db.insert(portfolio).values(item).returning();
    return newItem;
  }

  async createMessage(message: InsertMessage): Promise<Message> {
    const [newMessage] = await db.insert(messages).values(message).returning();
    return newMessage;
  }
}

export const storage = new DatabaseStorage();
