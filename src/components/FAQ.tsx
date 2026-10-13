import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

const faqItems = [
  {
    q: 'To‘lov usullari qanday?',
    a: 'Kredit‑karta, PayPal, bank o'tkazmasi va kripto valyuta orqali to‘lash imkoniyati mavjud.',
  },
  {
    q: '30 kunlik bepul sinovni olish mumkinmi?',
    a: 'Ha, ro‘yxatdan o‘tgandan so‘ng siz 30 kunlik bepul sinovni aktivlashtira olasiz.',
  },
  {
    q: 'Mijozlarni qo‘llab‑quvvatlash qanday?',
    a: '24/7 live chat, email va telefon orqali bizga murojaat qilishingiz mumkin.',
  },
]

export default function FAQ() {
  return (
    <section className="bg-primary-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary-900 mb-12">
          Savollar & Javoblar
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
          {faqItems.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-primary-800">{f.q}</AccordionTrigger>
              <AccordionContent className="text-primary-600">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
