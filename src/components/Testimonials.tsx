import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

const testimonials = [
  {
    name: 'Ali Hasanov',
    role: 'CTO, TechCo',
    quote: 'Random Brand mahsulotlari bizning ishlab chiqish vaqtini 30 % ga qisqartirdi!',
    avatar: '/avatars/ali.jpg',
  },
  {
    name: 'Margarita Petrova',
    role: 'Marketing Manager, BoldBiz',
    quote: 'Dizaynlar juda zamonaviy, mijozlarimiz oshkora quvondi.',
    avatar: '/avatars/margarita.jpg',
  },
  {
    name: 'John Doe',
    role: 'Founder, StartupX',
    quote: 'Qo‘llab‑quvvatlash jamoasi aql bovar qiladigan darajada tez.',
    avatar: '/avatars/john.jpg',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-primary-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary-900 mb-12">
          Mijozlarimiz nima deyishadi?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={t.avatar} alt={t.name} />
                  <AvatarFallback>{t.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-primary-800">{t.name}</p>
                  <p className="text-sm text-primary-600">{t.role}</p>
                </div>
              </div>
              <p className="italic text-primary-700">&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
