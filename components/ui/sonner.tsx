"use client"

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, toast as sonnerToast, type ToasterProps } from "sonner"

type ToastProps = {
  variant?: 'default' | 'success' | 'destructive'
  title?: string
  description?: string
}

const toast = ({ variant, title, description }: ToastProps) => {
  const message = title || description
  const options = { description: title ? description : undefined }

  if (variant === 'success') {
    return sonnerToast.success(message, options)
  }
  if (variant === 'destructive') {
    return sonnerToast.error(message, options)
  }
  return sonnerToast(message, options)
}

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster, toast }