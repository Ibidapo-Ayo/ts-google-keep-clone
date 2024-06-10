import { cva, VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const inpuStyles = cva(["transition-colors"], {
    variants: {
        variant: {
            default: ["bg-secondary", "hover:bg-secondary-hover"],
            ghost: ["bg-transparent", "hover:bg-transparent", "tracking-wide", "placeholder:tracking-wide", "placeholder:text-font-normal"],
        },

        style: {
            default: [" rounded", "p-2"],
            searchInput: [
                "w-full", "py-2", "focus:border-none", "focus:outline-none"
            ],
            listInput: [
                "w-full",
                "py-1",
                "px-1",
                "border-0",
                "outline-0"
            ],
            noneBgInput: [
                "outline-0",
                "border-0"
            ]
        },
    },
    defaultVariants: {
        variant: "default",
        style: "default",
    },
})

type InputProps = VariantProps<typeof inpuStyles> & ComponentProps<"input">

const Input = ({ variant, style, className, ...props }: InputProps) => {
    return (
        <input {...props} className={twMerge(inpuStyles({ variant, style }), className)} />
    )
}

export default Input