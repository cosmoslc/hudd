import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="w-full bg-primary-50 py-24">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12 px-4">
        {/* Text part */}
        <div className="max-w-lg space-y-6">
          <h1 className="text-4xl font-extrabold text-primary-900 leading-tight">
            Random Brand bilan yangi bosqichga qadam qo‘ying
          </h1>
          <p className="text-lg text-primary-700">
            Zamonaviy dizayn, yuqori sifatli xizmatlar va innovatsion yechimlar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-primary-600 hover:bg-primary-700">
              Hozir boshlash
            </Button>
            <Button variant="outline">
              Demo ko‘rish
            </Button>
          </div>
        </div>

        {/* Image part */}
        <div className="relative w-full md:w-1/2 h-64 md:h-96">
          <Image
            src="/hero-image.jpg"
            alt="Hero image"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
