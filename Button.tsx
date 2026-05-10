/**
 * Button.tsx — Reusable CTA Button
 * src/components/Button.tsx
 *
 * Props:
 *   variant  — 'primary' | 'outline' | 'ghost'  (default: 'primary')
 *   size     — 'sm' | 'md' | 'lg'               (default: 'md')
 *   href     — if provided, renders as <a> tag
 *   children — button label
 *   className, onClick — forwarded as-is
 */

import React from 'react'
import './Button.css'

type ButtonVariant = 'primary' | 'outline' | 'ghost'
type ButtonSize    = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?  : ButtonVariant
  size?     : ButtonSize
  href?     : string
  children  : React.ReactNode
  className?: string
}

export default function Button({
  variant   = 'primary',
  size      = 'md',
  href,
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const classes = [
    'btn',
    `btn-${variant}`,
    size !== 'md' ? `btn-${size}` : '',
    className,
  ].filter(Boolean).join(' ')

  // Render as anchor when href is provided
  if (href) {
    return (
      <a href={href} className={classes}>
        <span>{children}</span>
      </a>
    )
  }

  return (
    <button className={classes} {...rest}>
      <span>{children}</span>
    </button>
  )
}
