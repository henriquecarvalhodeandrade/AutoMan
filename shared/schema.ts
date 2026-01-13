import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const partners = pgTable("partners", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  logoUrl: text("logo_url").notNull(),
  website: text("website"),
});

export const portfolio = pgTable("portfolio", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  beforeImageUrl: text("before_image_url").notNull(),
  afterImageUrl: text("after_image_url").notNull(),
});

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
});

export const insertServiceSchema = createInsertSchema(services).omit({ id: true });
export const insertPartnerSchema = createInsertSchema(partners).omit({ id: true });
export const insertPortfolioSchema = createInsertSchema(portfolio).omit({ id: true });
export const insertMessageSchema = createInsertSchema(messages).omit({ id: true });

export type Service = typeof services.$inferSelect;
export type InsertService = z.infer<typeof insertServiceSchema>;
export type Partner = typeof partners.$inferSelect;
export type InsertPartner = z.infer<typeof insertPartnerSchema>;
export type PortfolioItem = typeof portfolio.$inferSelect;
export type InsertPortfolioItem = z.infer<typeof insertPortfolioSchema>;
export type Message = typeof messages.$inferSelect;
export type InsertMessage = z.infer<typeof insertMessageSchema>;
