import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Starter',
    price: '$19',
    frequency: '/oy',
    features: ['5 GB storage', 'Unlimited traffic', 'Email support'],
    mostPopular: false,
  },
  {
    name: 'Pro',
    price: '$49',
    frequency: '/oy',
    features: ['25 GB storage', 'Premium support', 'Advanced analytics'],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Qo‘ng‘iroq',
    frequency: '',
    features: ['Custom storage', 'Dedicated manager', 'SLA 99.9%'],
    mostPopular: false,
  },
]

export default function Pricing() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary-900 mb-12">
          Narxlar
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <Card
              key={i}
              className={`border ${p.mostPopular ? 'border-primary-600' : 'border-gray-200'} ${p.mostPopular ? 'shadow-xl' : ''}`}
            >
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-semibold text-primary-800">{p.name}</CardTitle>
                <p className="text-4xl font-bold text-primary-600 mt-2">{p.price}</p>
                <p className="text-sm text-primary-500">{p.frequency}</p>
              </CardHeader>
              <CardContent className="space-y-2">
                {p.features.map((f, idx) => (
                  <p key={idx} className="text-primary-600">• {f}</p>
                ))}
              </CardContent>
              <CardFooter className="flex justify-center py-6">
                <Button className={`w-full ${p.mostPopular ? 'bg-primary-600 hover:bg-primary-700' : ''}`}>
                  {p.mostPopular ? 'Hoziroq Boshlash' : 'Batafsil'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
