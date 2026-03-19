"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteConfig } from "@/lib/config";
export function SubscribeForm() {
  const [email, setEmail] = useState(""); const [status, setStatus] = useState<"idle"|"sending"|"done"|"error">("idle");
  async function handleSubmit(e: React.FormEvent) { e.preventDefault(); setStatus("sending"); try { const res = await fetch(siteConfig.nephew.apiUrl + "/api/sites/subscribe", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({ tenantId: siteConfig.nephew.tenantId, email }) }); if (!res.ok) throw new Error(); setStatus("done"); setEmail(""); } catch { setStatus("error"); } }
  if (status === "done") return <p className="text-sm font-medium text-green-600">You&apos;re subscribed!</p>;
  return (<form onSubmit={handleSubmit} className="flex gap-2"><Input type="email" value={email} onChange={e=>setEmail(e.target.value)} required placeholder="Your email" className="flex-1" /><Button type="submit" disabled={status==="sending"}>{status==="sending"?"...":"Subscribe"}</Button></form>);
}
