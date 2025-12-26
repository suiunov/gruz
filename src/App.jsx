import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Menu, X, Check, Truck, Package, ArrowRight, User, Globe } from 'lucide-react';
import { translations } from './translations';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [lang, setLang] = useState('ru');

    const t = translations[lang];

    const navigation = [
        { name: t.nav.home, href: '#' },
        { name: t.nav.about, href: '#about' },
        { name: t.nav.services, href: '#services' },
        { name: t.nav.tariffs, href: '#tariffs' },
        { name: t.nav.contacts, href: '#footer' },
    ];

    const services = [
        {
            title: t.services.porter_title,
            description: t.services.porter_desc,
            icon: <Truck className="w-8 h-8 text-blue-600" />,
            features: [t.services.porter_f1, t.services.porter_f2, t.services.porter_f3]
        },
        {
            title: t.services.movers_title,
            description: t.services.movers_desc,
            icon: <User className="w-8 h-8 text-blue-600" />,
            features: [t.services.movers_f1, t.services.movers_f2, t.services.movers_f3]
        },
        {
            title: t.services.moving_title,
            description: t.services.moving_desc,
            icon: <Package className="w-8 h-8 text-blue-600" />,
            features: [t.services.moving_f1, t.services.moving_f2, t.services.moving_f3]
        },
        {
            title: t.services.intercity_title,
            description: t.services.intercity_desc,
            icon: <MapPin className="w-8 h-8 text-blue-600" />,
            features: [t.services.intercity_f1, t.services.intercity_f2, t.services.intercity_f3]
        }
    ];

    const fleet = [
        {
            name: t.fleet.porter_name,
            capacity: t.fleet.porter_cap,
            price: t.fleet.porter_price,
            image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=600',
        },
        {
            name: t.fleet.sprinter_name,
            capacity: t.fleet.sprinter_cap,
            price: t.fleet.sprinter_price,
            image: 'https://images.unsplash.com/photo-1565514020176-13d865ee1df5?auto=format&fit=crop&q=80&w=600',
        },
        {
            name: t.fleet.truck_name,
            capacity: t.fleet.truck_cap,
            price: t.fleet.truck_price,
            image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600',
        }
    ];

    const LangButton = ({ code, label }) => (
        <button
            onClick={() => setLang(code)}
            className={`px-2 py-1 rounded text-xs font-bold transition-colors ${lang === code ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:text-white'}`}
        >
            {label}
        </button>
    );

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">


            {/* Navigation */}
            <header className="bg-white shadow sticky top-0 z-50">
                <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-600 flex items-center gap-2">
                        <Truck size={32} />
                        <span>312-Cargo</span>
                    </div>

                    <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="hover:text-blue-600 transition-colors">
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <a href="tel:+996700190100" className="flex flex-col items-end">
                            <span className="text-sm text-gray-500">{t.nav.questions}</span>
                            <span className="font-bold text-lg leading-tight">+996 (700) 19-01-00</span>
                        </a>
                        <a href="https://wa.me/996700190100" className="btn bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 px-4 py-2 rounded-lg font-bold transition-colors">
                            {t.cta.btn_wa}
                        </a>
                        <div className="flex items-center gap-1 ml-2">
                            <LangButton code="ru" label="RU" />
                            <LangButton code="ky" label="KG" />
                            <LangButton code="en" label="EN" />
                        </div>
                    </div>

                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t p-4 absolute w-full shadow-lg">
                        <div className="flex gap-2 justify-center mb-4 pb-4 border-b">
                            <LangButton code="ru" label="Русский" />
                            <LangButton code="ky" label="Кыргызча" />
                            <LangButton code="en" label="English" />
                        </div>
                        <nav className="flex flex-col space-y-4">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="font-medium text-gray-700 p-2 hover:bg-blue-50 hover:text-blue-600 rounded"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="pt-4 border-t">
                                <a href="tel:+996700190100" className="block text-center font-bold text-lg mb-4">+996 (700) 19-01-00</a>
                                <button className="w-full btn btn-primary">{t.cta.btn_wa}</button>
                            </div>
                        </nav>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <div className="relative bg-gray-900 text-white py-24 lg:py-32 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1920")' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40 z-0" />

                <div className="container relative z-10 mx-auto px-4">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            {t.hero.title}
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            {t.hero.subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="btn btn-primary text-lg px-8 py-3">
                                {t.hero.calculate}
                            </button>
                            <button className="btn bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-3">
                                {t.hero.services}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features */}
            <section className="py-12 bg-white -mt-10 relative z-20 container mx-auto px-4 shadow-xl rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex items-start gap-4">
                        <div className="bg-blue-100 p-3 rounded-lg"><Clock className="text-blue-600" size={24} /></div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">{t.features.speed_title}</h3>
                            <p className="text-gray-600">{t.features.speed_desc}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-blue-100 p-3 rounded-lg"><Check className="text-blue-600" size={24} /></div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">{t.features.safety_title}</h3>
                            <p className="text-gray-600">{t.features.safety_desc}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-blue-100 p-3 rounded-lg"><Phone className="text-blue-600" size={24} /></div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">{t.features.support_title}</h3>
                            <p className="text-gray-600">{t.features.support_desc}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white border-b">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">{t.about.title}</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            {t.about.p1}
                        </p>
                        <p className="text-gray-600 mb-6">
                            {t.about.p2}
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-3"><Check className="text-blue-600 flex-shrink-0" size={20} /> <span>{t.about.list1}</span></li>
                            <li className="flex items-center gap-3"><Check className="text-blue-600 flex-shrink-0" size={20} /> <span>{t.about.list2}</span></li>
                            <li className="flex items-center gap-3"><Check className="text-blue-600 flex-shrink-0" size={20} /> <span>{t.about.list3}</span></li>
                        </ul>
                    </div>
                    <div className="order-1 md:order-2">
                        <img
                            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800"
                            alt="Грузоперевозки Бишкек"
                            className="rounded-xl shadow-lg w-full object-cover h-[400px]"
                        />
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">{t.services.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="mb-4 bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                                            <Check size={14} className="text-green-500" /> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tariffs / Fleet */}
            <section id="tariffs" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">{t.fleet.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {fleet.map((item, index) => (
                            <div key={index} className="border rounded-xl overflow-hidden hover:shadow-lg transition-all group">
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                                    <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                                        <span>{t.fleet.capacity}: {item.capacity}</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-4 border-t">
                                        <span className="text-2xl font-bold text-blue-600">{item.price}</span>
                                        <button className="flex items-center text-blue-600 font-semibold hover:gap-2 transition-all">
                                            {t.fleet.order} <ArrowRight size={18} className="ml-1" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">{t.cta.title}</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        {t.cta.subtitle}
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                            {t.cta.btn_call}
                        </button>
                        <button className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors">
                            {t.cta.btn_wa}
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="footer" className="bg-gray-900 text-slate-400 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <div className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <Truck /> 312-Cargo
                            </div>
                            <p className="mb-6">
                                {t.footer.desc}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-6">{t.footer.contacts_title}</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <MapPin className="text-blue-500" size={20} />
                                    г. Бишкек, Кыргызстан
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone className="text-blue-500" size={20} />
                                    <a href="tel:+996700190100" className="hover:text-white transition-colors">+996 (700) 19-01-00</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="text-blue-500" size={20} />
                                    info@gruz.kg
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-6">{t.footer.menu_title}</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white transition-colors">{t.nav.home}</a></li>
                                <li><a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a></li>
                                <li><a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a></li>
                                <li><a href="#tariffs" className="hover:text-white transition-colors">{t.nav.tariffs}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
                        &copy; {new Date().getFullYear()} 312-Cargo. {t.footer.rights}
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
