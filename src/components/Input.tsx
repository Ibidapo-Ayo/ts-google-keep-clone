import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const inpuStyles = cva(["transition-colors"], {
    variants: {
        variant: {
            default: ["bg-secondary", "hover:bg-secondary-hover"],
            ghost: ["bg-transparent", "hover:bg-transparent"],
        },

        size: {
            default: [" rounded", "p-2"],
            searchInput: [
                "w-full", "py-2", "focus:border-none", "focus:outline-none"
            ],
            listInput: [
                "w-full",
                "py-1",
                "px-1"
            ],
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
})

type InputProps = VariantProps<typeof inpuStyles> & ComponentProps<"input">

const Input = ({ variant, size, className, ...props }: InputProps) => {
    return (
        <input {...props} className={twMerge(inpuStyles({ variant, size }), className)} />
    )
}

export default Input