"use client"
import Galaxy from '@/components/animation/background/Galaxy'

const Loading = () => {
    return (
        <div className="w-screen h-screen bg-black">
            <Galaxy
                mouseRepulsion={true}
                mouseInteraction={true}
                density={1.5}
                glowIntensity={0.5}
                saturation={0.1}
                hueShift={240}
            />
        </div>
    )
}

export default Loading