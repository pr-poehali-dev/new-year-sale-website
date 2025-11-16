import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const programs = [
  {
    id: 1,
    title: 'Волшебная сказка',
    age: '3-6 лет',
    duration: '2 часа',
    description: 'Дед Мороз и Снегурочка приглашают малышей в волшебную зимнюю сказку с играми, хоროводами и подарками',
    price: '15 000 ₽',
    includes: ['Дед Мороз и Снегурочка', 'Интерактивные игры', 'Хоровод у ёлки', 'Подарки детям'],
    icon: 'Snowflake'
  },
  {
    id: 2,
    title: 'Приключения в зимнем лесу',
    age: '7-10 лет',
    duration: '2.5 часа',
    description: 'Увлекательный квест с лесными персонажами, загадками и призами для школьников',
    price: '18 000 ₽',
    includes: ['Квест-приключение', 'Аниматоры-персонажи', 'Призы и сувениры', 'Фотозона'],
    icon: 'Trees'
  },
  {
    id: 3,
    title: 'Новогодний бал',
    age: '10-14 лет',
    duration: '3 часа',
    description: 'Стильный праздник для подростков с дискотекой, конкурсами и фотосессией',
    price: '22 000 ₽',
    includes: ['DJ и дискотека', 'Ведущий', 'Конкурсы и игры', 'Candy bar'],
    icon: 'PartyPopper'
  }
];

const gallery = [
  'https://cdn.poehali.dev/projects/b870d2ee-9aa7-4758-9e6c-5cf82e873db6/files/091ffb19-1d9c-4c03-88e3-3a03fa80fe7e.jpg',
  'https://cdn.poehali.dev/projects/b870d2ee-9aa7-4758-9e6c-5cf82e873db6/files/eb890409-7846-446a-bdb0-f2407a32e3dc.jpg',
  'https://cdn.poehali.dev/projects/b870d2ee-9aa7-4758-9e6c-5cf82e873db6/files/ccccbd31-4a08-447d-8235-210f0b2e10a1.jpg'
];

const reviews = [
  {
    id: 1,
    name: 'Елена',
    text: 'Потрясающий праздник! Дети были в восторге, особенно понравился квест. Спасибо за волшебство!',
    rating: 5
  },
  {
    id: 2,
    name: 'Дмитрий',
    text: 'Заказывали программу для дочки 5 лет. Всё прошло замечательно, аниматоры профессионалы!',
    rating: 5
  },
  {
    id: 3,
    name: 'Ольга',
    text: 'Лучший новогодний праздник! Ребята создали настоящую сказку для наших детей.',
    rating: 5
  }
];

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    const createSnowflakes = () => {
      const snowflakeCount = 30;
      const container = document.body;

      for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = '❄';
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.fontSize = `${Math.random() * 20 + 10}px`;
        snowflake.style.animationDuration = `${Math.random() * 10 + 10}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(snowflake);
      }
    };

    createSnowflakes();

    return () => {
      document.querySelectorAll('.snowflake').forEach(el => el.remove());
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время!');
    setFormData({ name: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-40 border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ✨ Новогодняя Сказка
            </h1>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('programs')} className="hover:text-primary transition-colors">Программы</button>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-primary transition-colors">Галерея</button>
              <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('prices')} className="hover:text-primary transition-colors">Цены</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('contacts')} className="hidden md:block">
              Заказать праздник
            </Button>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="text-lg px-4 py-2">Новогодние праздники для детей</Badge>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Создаём <span className="text-primary">волшебство</span> для ваших детей
              </h2>
              <p className="text-xl text-muted-foreground">
                Незабываемые новогодние праздники с Дедом Морозом, Снегурочкой и сказочными персонажами
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection('programs')}>
                  Выбрать программу
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection('contacts')}>
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src={gallery[0]} 
                alt="Новогодний праздник" 
                className="rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Star" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-2xl">500+</div>
                    <div className="text-sm text-muted-foreground">Счастливых детей</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-20 bg-gradient-to-b from-white to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Наши программы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Выберите свою сказку</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Разные сценарии для детей всех возрастов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card 
                key={program.id} 
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={program.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <CardDescription className="text-base">
                    {program.age} • {program.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{program.description}</p>
                  <div className="space-y-2">
                    {program.includes.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-primary flex-shrink-0" size={16} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t">
                    <div className="text-3xl font-bold text-primary mb-4">{program.price}</div>
                    <Button className="w-full" onClick={() => scrollToSection('contacts')}>
                      Заказать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Галерея</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Моменты волшебства</h2>
            <p className="text-xl text-muted-foreground">Фотографии с наших праздников</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-3xl aspect-square animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={image} 
                  alt={`Фото ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят родители</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card 
                key={review.id} 
                className="animate-fade-in hover:shadow-xl transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-accent fill-accent" size={20} />
                    ))}
                  </div>
                  <CardTitle>{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Цены</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Прозрачные цены</h2>
            <p className="text-xl text-muted-foreground">Без скрытых платежей</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {programs.map((program) => (
                    <div key={program.id} className="flex items-center justify-between pb-6 border-b last:border-b-0 last:pb-0">
                      <div>
                        <h3 className="font-bold text-xl mb-1">{program.title}</h3>
                        <p className="text-sm text-muted-foreground">{program.age} • {program.duration}</p>
                      </div>
                      <div className="text-2xl font-bold text-primary">{program.price}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-muted rounded-2xl">
                  <div className="flex items-start gap-3">
                    <Icon name="Gift" className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold mb-2">Специальное предложение!</h4>
                      <p className="text-sm text-muted-foreground">
                        При заказе до 15 декабря — скидка 10% на любую программу
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Контакты</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Закажите праздник</h2>
              <p className="text-xl text-muted-foreground">Оставьте заявку и мы свяжемся с вами</p>
            </div>

            <Card className="border-2">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block mb-2 font-medium">Ваше имя</label>
                    <Input 
                      placeholder="Как вас зовут?"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Телефон</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите о вашем празднике: возраст детей, желаемая программа, дата..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-32"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg">
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={20} />
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon name="Phone" className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Телефон</div>
                      <div className="font-medium">+7 (999) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-secondary/10 p-3 rounded-full">
                      <Icon name="Mail" className="text-secondary" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-medium">hello@newyear.ru</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">✨ Новогодняя Сказка</h3>
          <p className="text-white/70 mb-6">Создаём волшебство для ваших детей</p>
          <div className="flex justify-center gap-6 mb-6">
            <button onClick={() => scrollToSection('programs')} className="hover:text-primary transition-colors">Программы</button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-primary transition-colors">Галерея</button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
          </div>
          <p className="text-white/50 text-sm">© 2024 Новогодняя Сказка. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
