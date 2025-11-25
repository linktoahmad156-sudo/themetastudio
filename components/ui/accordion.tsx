"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionProps {
  type?: "single" | "multiple"
  collapsible?: boolean
  children: React.ReactNode
  className?: string
}

interface AccordionItemProps {
  value: string
  children: React.ReactNode
  className?: string
}

interface AccordionTriggerProps {
  children: React.ReactNode
  className?: string
}

interface AccordionContentProps {
  children: React.ReactNode
  className?: string
}

const AccordionContext = React.createContext<{
  openItems: Set<string>
  toggleItem: (value: string) => void
}>({
  openItems: new Set(),
  toggleItem: () => {},
})

const AccordionItemContext = React.createContext<{
  value: string
  isOpen: boolean
}>({
  value: "",
  isOpen: false,
})

export function Accordion({ type = "single", collapsible = false, children, className }: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<Set<string>>(new Set())

  const toggleItem = (value: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(value)) {
        if (collapsible || type === "multiple") {
          newSet.delete(value)
        }
      } else {
        if (type === "single") {
          newSet.clear()
        }
        newSet.add(value)
      }
      return newSet
    })
  }

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={cn("space-y-2", className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

export function AccordionItem({ value, children, className }: AccordionItemProps) {
  const { openItems } = React.useContext(AccordionContext)
  const isOpen = openItems.has(value)

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div className={cn("border-b", className)}>{children}</div>
    </AccordionItemContext.Provider>
  )
}

export function AccordionTrigger({ children, className }: AccordionTriggerProps) {
  const { toggleItem } = React.useContext(AccordionContext)
  const { value, isOpen } = React.useContext(AccordionItemContext)

  return (
    <button
      type="button"
      onClick={() => toggleItem(value)}
      className={cn(
        "flex w-full flex-1 items-center justify-between py-4 font-medium transition-all hover:underline text-left",
        className
      )}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </button>
  )
}

export function AccordionContent({ children, className }: AccordionContentProps) {
  const { isOpen } = React.useContext(AccordionItemContext)

  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-200",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </div>
  )
}
