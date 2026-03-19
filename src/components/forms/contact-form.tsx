"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/config";
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setStatus("sending");
    const form = e.currentTarget; const data = new FormData(form);
    try {
      const res = await fetch(siteConfig.nephew.apiUrl + "/api/sites/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ tenantId: siteConfig.nephew.tenantId, name: data.get("name"), email: data.get("email"), phone: data.get("phone"), message: data.get("message") }) });
      if (!res.ok) throw new Error("Failed"); setStatus("sent"); form.reset();
    } catch { setStatus("error"); }
  }
  if (status === "sent") return (<div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center"><p className="text-lg font-semibold text-green-800">Message sent!</p><p className="mt-1 text-sm text-green-600">We&apos;ll get back to you soon.</p><Button variant="outline" className="mt-4" onClick={() => setStatus("idle")}>Send another</Button></div>);
  return (<form onSubmit={handleSubmit} className="space-y-4">
    <div className="grid gap-4 sm:grid-cols-2"><div><label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name *</label><Input id="name" name="name" required placeholder="Your name" /></div><div><label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email *</label><Input id="email" name="email" type="email" required placeholder="you@example.com" /></div></div>
    <div><label htmlFor="phone" className="mb-1.5 block text-sm font-medium">Phone</label><Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" /></div>
    <div><label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message *</label><Textarea id="message" name="message" required rows={4} placeholder="How can we help?" /></div>
    <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send Message"}</Button>
    {status === "error" && <p className="text-center text-sm text-red-500">Something went wrong. Please try again.</p>}
  </form>);
}
