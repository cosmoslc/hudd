import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function Contact() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-primary-900 mb-8">
          Biz bilan bog‘lanish
        </h2>
        
        <form className="grid gap-6">
          <Input placeholder="Ismingiz" required />
          <Input type="email" placeholder="Email manzilingiz" required />
          <Textarea placeholder="Suhbat matni…" rows={5} required />
          <Button type="submit" className="bg-primary-600 hover:bg-primary-700">Yuborish</Button>
        </form>
      </div>
    </section>
  )
}
