import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Sparkles } from 'lucide-react'

const features = [
  {
    title: 'Innovatsion texnologiya',
    description: 'Eng so‘nggi AI/ML algoritmlari orqali biznes jarayonlaringizni optimallashtiring.',
    icon: <Sparkles className="h-6 w-6 text-primary-600" />, // JSX element string sifatida
  },
  {
    title: 'Moslashtirilgan dizayn',
    description: 'Brendingizga mos, to‘liq responsive UI/UX.',
    icon: <Sparkles className="h-6 w-6 text-primary-600" />, // JSX
  },
  {
    title: 'Tez qo‘llab‑quvvatlash',
    description: '24/7 live chat + AI‑assistant yordamida muammolarni darhol hal qiling.',
    icon: <Sparkles className="h-6 w-6 text-primary-600" />, // JSX
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary-900 mb-12">
          Nima bilan ajralib turamiz?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <Card key={i} className="border-primary-100 hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-col items-center text-center">
                {f.icon}
                <CardTitle className="mt-3 text-primary-800">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-primary-600 text-center">
                {f.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
