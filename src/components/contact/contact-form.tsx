"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { IconTile } from "@/components/icon-tile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 border border-border bg-secondary p-8">
        <IconTile tone="primary">
          <CheckCircle2 className="size-5" aria-hidden />
        </IconTile>
        <h2 className="font-heading text-xl font-bold">Thanks — we&apos;ll follow up shortly.</h2>
        <p className="text-muted-foreground">
          A member of the Mint team will be in touch to discuss your property.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email address</Label>
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="propertyType">Property type</Label>
          <Select name="propertyType">
            <SelectTrigger id="propertyType" className="h-11 w-full rounded-sm">
              <SelectValue placeholder="Select property type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message">Project description</Label>
        <Textarea id="message" name="message" rows={5} placeholder="Tell us about your property and the work you'd like done." />
      </div>

      <Button type="submit" size="lg" className="mt-2 h-12 w-full rounded-sm text-base sm:w-fit sm:px-8">
        Get a Quote
      </Button>
    </form>
  );
}
