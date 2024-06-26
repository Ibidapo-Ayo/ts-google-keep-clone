import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const buttonStyles = cva(["transition-colors"], {
    variants: {
        variant: {
            default: ["bg-secondary", "hover:bg-secondary-hover"],
            ghost: ["hover:bg-gray-100"],
            darker: ["hover:bg-gray-200"],
            focus: [
                "bg-gray-200",
                "hover:bg-gray-200"
            ],
        },
        size: {
            default: [" rounded", "p-2"],
            icon1: [
                "rounded-full",
                "w-14",
                "h-14",
                "flex",
                "items-center",
                "justify-center",
                "p-4",
            ],

            icon2: [
                "rounded-full",
                "w-12",
                "h-12",
                "flex",
                "items-center",
                "justify-center",
                "p-2.5",
            ],
            icon3: [
                "rounded-full",
                "w-10",
                "h-10",
                "flex",
                "items-center",
                "justify-center",
                "p-2",
            ],
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">

const Button = ({ variant, size, className, ...props }: ButtonProps) => {
    return (
        <button {...props} className={twMerge(buttonStyles({ variant, size }), className)} />
    )
}

export default Button