"use client";
import {
  Flower2,
  Menu,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  HeartHandshake,
  Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const productImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDTNI2iYMSpKeEc2lRFNhfALo4mZmnKvlGVR0dJ-sHrn1lS7zTScREeLl1TddT8vIbdFtlyZyQEuMGOavTAXm1m4sVKMTGfo3xF8U5AY3XxZDP145ihd49_vqDyktSRAn5zc2hSzyXMFtaZnwZoQMlZ-LxtC_-kymWgeNtNfCUd7H0QXRv7gYDEYO2M5Cwvx3kVUiQ-uK9b4AJaKLWflvge5bLWi_aIelCmZzEMUEsSSC-4XEN3S_u1Q7MoeNbf4HSQnBCOUKoDhAIb";

const products = [
  {
    title: "Ramo Primavera Suave",
    price: "45 €",
    tag: "Más vendido",
  },
  {
    title: "Rosas Delicadas",
    price: "58 €",
    tag: "Temporada",
  },
  {
    title: "Centro Blanco Elegante",
    price: "65 €",
    tag: "Eventos",
  },
  {
    title: "Bouquet Natural de Autor",
    price: "52 €",
    tag: "Edición especial",
  },
  {
    title: "Ramo Romántico",
    price: "49 €",
    tag: "Regalo",
  },
  {
    title: "Selección Botánica Premium",
    price: "72 €",
    tag: "Premium",
  },
];

const categories = [
  "Temporada",
  "Rosas",
  "Bodas",
  "Regalo",
  "Centro de mesa",
  "Premium",
];

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between rounded-full bg-white/75 px-4 py-3 shadow-[0_12px_40px_rgba(25,28,27,0.06)] backdrop-blur-2xl sm:px-6">
            <a href="#" className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Flower2 className="size-5" />
              </div>

              <div>
                <p className="font-headline text-xl font-bold tracking-tight text-primary">
                  Inclik
                </p>
                <p className="text-xs text-on-surface-variant">
                  Floristería boutique
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              <a
                href="#catalogo"
                className="text-sm font-medium text-primary transition-opacity hover:opacity-75"
              >
                Catálogo
              </a>
              <a
                href="#coleccion"
                className="text-sm font-medium text-on-surface-variant transition-colors hover:text-primary"
              >
                Colección
              </a>
              <a
                href="#servicios"
                className="text-sm font-medium text-on-surface-variant transition-colors hover:text-primary"
              >
                Servicios
              </a>
              <a
                href="#contacto"
                className="text-sm font-medium text-on-surface-variant transition-colors hover:text-primary"
              >
                Contacto
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="hidden rounded-full text-primary hover:bg-primary/10 hover:text-primary md:inline-flex"
                aria-label="Abrir carrito"
              >
                <ShoppingBag className="size-5" />
              </Button>

              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-primary hover:bg-primary/10 hover:text-primary md:hidden"
                    aria-label="Abrir menú"
                  >
                    <Menu className="size-5" />
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="w-[88%] max-w-sm border-0 bg-[rgba(248,250,248,0.86)] px-6 shadow-[0_12px_40px_rgba(25,28,27,0.06)] backdrop-blur-2xl"
                >
                  <SheetHeader className="mb-8 px-0 pt-3 text-left">
                    <SheetTitle className="flex items-center gap-3 text-left">
                      <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Flower2 className="size-5" />
                      </span>
                      <span>
                        <span className="font-headline block text-2xl text-primary">
                          Inclik
                        </span>
                        <span className="block text-xs font-normal text-on-surface-variant">
                          Diseño floral editorial
                        </span>
                      </span>
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex h-full flex-col justify-between">
                    <nav className="flex flex-col gap-2">
                      {[
                        { label: "Catálogo", href: "#catalogo" },
                        { label: "Colección", href: "#coleccion" },
                        { label: "Servicios", href: "#servicios" },
                        { label: "Contacto", href: "#contacto" },
                      ].map((item) => (
                        <SheetClose asChild key={item.label}>
                          <a
                            href={item.href}
                            className="rounded-2xl bg-white/70 px-4 py-4 text-base font-medium text-on-surface transition-colors hover:bg-primary/10 hover:text-primary"
                          >
                            {item.label}
                          </a>
                        </SheetClose>
                      ))}
                    </nav>

                    <div className="space-y-4 pb-6">
                      <div className="rounded-3xl bg-primary-fixed p-5">
                        <p className="font-headline text-2xl text-primary">
                          Flores para momentos memorables
                        </p>
                        <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                          Ramos, centros y composiciones florales con una
                          estética elegante, delicada y natural.
                        </p>
                      </div>

                      <SheetClose asChild>
                        <Button className="w-full rounded-full bg-linear-to-br from-primary to-primary-container text-on-primary hover:opacity-95">
                          Ver catálogo
                        </Button>
                      </SheetClose>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-white px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-4rem] top-10 h-40 w-40 rounded-full bg-primary-fixed/60 blur-3xl sm:h-56 sm:w-56" />
            <div className="absolute right-[-2rem] top-20 h-40 w-40 rounded-full bg-secondary-container/70 blur-3xl sm:h-52 sm:w-52" />
            <div className="absolute bottom-0 left-1/3 h-32 w-32 rounded-full bg-tertiary-container/45 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-12 lg:gap-0">
            <div className="order-1 lg:col-span-6 lg:pr-0">
              <div className="relative mx-auto max-w-md lg:max-w-[34rem]">
                <div className="absolute inset-0 translate-x-4 translate-y-4 rotate-[-4deg] rounded-[2rem] bg-primary-fixed/70" />
                <div className="relative overflow-hidden rounded-[2rem] bg-surface-container-lowest shadow-[0_12px_40px_rgba(25,28,27,0.06)]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzf7RsgiWizTomXisOgQfPHLt6YMZpgs7x7BG7ntqSc7byWzui3KHYPvxsch9jF9jp4LklAiJ3M6EuBGQz-78syVRkSX2zR9bHMN-sUlo3bVUdz7C6eV-hswjIm1AJBCwxVYqb35aQFBk8aGTGKTiSetw19USgj50nX5PjPo1dN4TjG3_D763btCbZ_m9mts5A25ZCYeog7rUg2kBCwustrivWNDb11beydxqxvs5S22LUr8_jDe9AmZbjlJUkkv6aNP4A6sdBXMDh"
                    alt="Ramo floral elegante"
                    className="h-[360px] w-full object-cover sm:h-[480px] lg:h-[680px]"
                  />
                </div>
              </div>
            </div>

            <div className="order-2 lg:col-span-6 lg:-ml-14 xl:-ml-20">
              <div className="flex lg:min-h-[680px] lg:items-center">
                <div className="w-full rounded-[2rem] bg-white/88 p-0 backdrop-blur-sm lg:p-8">
                  <div className="space-y-6">
                    <div className="space-y-5">
                      <h1 className="font-headline text-4xl leading-[0.95] font-bold tracking-[-0.04em] text-primary sm:text-5xl lg:text-7xl">
                        Flores con alma,
                        <br />
                        belleza con intención.
                      </h1>

                      <p className="max-w-xl text-base leading-7 text-on-surface-variant sm:text-lg">
                        Diseñamos ramos, centros y composiciones florales con un
                        enfoque elegante, orgánico y contemporáneo. Cada arreglo
                        está pensado para emocionar, decorar y convertir un
                        gesto en una experiencia memorable.
                      </p>
                    </div>

                    <div className="flex gap-3 max-sm:flex-row max-sm:flex-nowrap sm:flex-row">
                      <Button className="min-w-0 flex-1 rounded-full bg-linear-to-br from-primary to-primary-container px-4 py-6 text-on-primary shadow-[0_12px_40px_rgba(25,28,27,0.06)] hover:opacity-95 sm:px-7">
                        <span className="truncate">Ver catálogo</span>
                      </Button>

                      <Button
                        variant="secondary"
                        className="min-w-0 flex-1 rounded-full bg-secondary-container px-4 py-6 text-on-secondary-container hover:opacity-95 sm:px-7"
                      >
                        <span className="truncate">
                          Pedir ramo personalizado
                        </span>
                      </Button>
                    </div>

                    <div className="flex gap-4 pt-4 max-sm:flex-row max-sm:flex-nowrap sm:grid sm:max-w-xl sm:grid-cols-3">
                      <div className="min-w-0 flex-1 rounded-3xl bg-surface-container-low p-4">
                        <p className="text-2xl font-bold text-primary">+120</p>
                        <p className="text-sm text-on-surface-variant">
                          composiciones florales
                        </p>
                      </div>
                      <div className="min-w-0 flex-1 rounded-3xl bg-primary-fixed/65 p-4">
                        <p className="text-2xl font-bold text-primary">24h</p>
                        <p className="text-sm text-on-surface-variant">
                          entregas locales
                        </p>
                      </div>
                      <div className="min-w-0 flex-1 rounded-3xl bg-secondary-container/70 p-4">
                        <p className="text-2xl font-bold text-secondary">
                          100%
                        </p>
                        <p className="text-sm text-on-surface-variant">
                          flor fresca seleccionada
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="coleccion"
          className="bg-surface-container-low px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-secondary">
                  Colección curada
                </p>
                <h2 className="font-headline text-3xl font-bold tracking-[-0.03em] text-on-background sm:text-5xl">
                  Una galería botánica pensada como piezas de autor
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product, index) => (
                <Card
                  key={`${product.title}-${index}`}
                  className={`group overflow-hidden border-0 py-0 shadow-[0_12px_40px_rgba(25,28,27,0.06)] transition-transform duration-300 hover:-translate-y-1 ${
                    index % 3 === 1 ? "xl:translate-y-10" : ""
                  } rounded-[2rem] bg-surface-container-lowest`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={productImage}
                      alt={product.title}
                      className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-80"
                    />
                  </div>

                  <CardContent className="space-y-4 p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Badge className="mb-3 rounded-full bg-primary-fixed/70 text-primary hover:bg-primary-fixed/70">
                          {product.tag}
                        </Badge>
                        <h3 className="font-headline text-2xl leading-tight text-on-surface">
                          {product.title}
                        </h3>
                      </div>

                      <span className="shrink-0 text-lg font-bold text-secondary">
                        {product.price}
                      </span>
                    </div>

                    <p className="text-sm leading-6 text-on-surface-variant">
                      Composición floral con flores frescas seleccionadas,
                      acabado elegante y una presentación pensada para regalar o
                      transformar cualquier rincón con naturalidad.
                    </p>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Button className="flex-1 rounded-full bg-linear-to-br from-primary to-primary-container text-on-primary hover:opacity-95">
                        Añadir al carrito
                      </Button>
                      <Button
                        variant="secondary"
                        className="flex-1 rounded-full bg-secondary-container text-on-secondary-container hover:opacity-95"
                      >
                        Ver detalle
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="servicios"
          className="bg-primary-fixed/50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="max-w-md">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  Servicios florales
                </p>
                <h2 className="font-headline text-3xl font-bold tracking-[-0.03em] text-primary sm:text-5xl">
                  Color, textura y sensibilidad para cada ocasión
                </h2>
                <p className="mt-5 text-base leading-7 text-on-surface-variant">
                  Hemos dado más protagonismo cromático a esta franja para
                  romper la monotonía y reforzar la sensación viva, orgánica y
                  artística de la marca.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3 lg:col-span-8">
              <Card className="rounded-[2rem] border-0 bg-white/85 shadow-[0_12px_40px_rgba(25,28,27,0.06)] backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Sparkles className="size-5" />
                  </div>
                  <h3 className="font-headline text-2xl text-primary">
                    Ramos personalizados
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                    Diseños florales a medida para cumpleaños, aniversarios,
                    agradecimientos y regalos con intención.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] border-0 bg-secondary-container/70 shadow-[0_12px_40px_rgba(25,28,27,0.06)]">
                <CardContent className="p-6">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-white/55 text-secondary">
                    <HeartHandshake className="size-5 text-black" />
                  </div>
                  <h3 className="font-headline text-2xl text-secondary">
                    Bodas y eventos
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                    Composiciones con una estética delicada y editorial para
                    mesas, ceremonias, recepciones y espacios especiales.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-[2rem] border-0 bg-tertiary-container/70 shadow-[0_12px_40px_rgba(25,28,27,0.06)]">
                <CardContent className="p-6">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-white/55 text-tertiary">
                    <Leaf className="size-5" />
                  </div>
                  <h3 className="font-headline text-2xl text-tertiary">
                    Decoración botánica
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                    Selección floral para interiores, escaparates y rincones que
                    buscan una presencia natural más sofisticada.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-background px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="rounded-[2rem] bg-surface-container-low p-6 sm:p-8">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-secondary">
                  Experiencia floral
                </p>
                <h2 className="font-headline text-3xl text-primary sm:text-5xl">
                  Una web con más aire, más color y más carácter botánico
                </h2>
                <p className="mt-4 text-base leading-7 text-on-surface-variant">
                  Hemos reforzado la sensación de galería usando bloques
                  cromáticos, superficies apiladas y contenido sin divisores
                  rígidos para que la experiencia se sienta más premium.
                </p>

                <Button className="mt-6 rounded-full bg-linear-to-br from-primary to-primary-container text-on-primary hover:opacity-95">
                  Descubrir colección
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              <div className="rounded-[2rem] bg-white p-6 shadow-[0_12px_40px_rgba(25,28,27,0.06)]">
                <p className="font-headline text-2xl text-primary">
                  Ramos para cada ocasión
                </p>
                <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                  Una selección de composiciones florales pensadas para
                  cumpleaños, aniversarios, agradecimientos, celebraciones y
                  detalles especiales.
                </p>
              </div>

              <div className="rounded-[2rem] bg-primary-fixed/55 p-6">
                <p className="font-headline text-2xl text-primary">
                  Flores frescas de temporada
                </p>
                <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                  Trabajamos con flor fresca cuidadosamente seleccionada para
                  ofrecer arreglos con color, textura y una presencia natural
                  más elegante.
                </p>
              </div>

              <div className="rounded-[2rem] bg-secondary-container p-6">
                <p className="font-headline text-2xl text-secondary">
                  Diseño floral con sensibilidad
                </p>
                <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                  Cada ramo y cada centro floral está diseñado con una estética
                  delicada, armoniosa y pensada para emocionar desde el primer
                  vistazo.
                </p>
              </div>

              <div className="rounded-[2rem] bg-surface-container-low p-6">
                <p className="font-headline text-2xl text-primary">
                  Entregas que cuidan el detalle
                </p>
                <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                  Preparamos cada pedido con mimo para que llegue con una
                  presentación impecable, listo para regalar o llenar cualquier
                  espacio de vida.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        id="contacto"
        className="bg-surface-container-low px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-headline text-2xl font-bold text-primary">
              Inclik
            </p>
            <p className="mt-2 text-sm text-on-surface-variant">
              Floristería boutique · Ramos frescos · Diseño floral
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-on-surface-variant">
            <a href="#catalogo" className="hover:text-primary">
              Catálogo
            </a>
            <a href="#coleccion" className="hover:text-primary">
              Colección
            </a>
            <a href="#servicios" className="hover:text-primary">
              Servicios
            </a>
            <a href="#contacto" className="hover:text-primary">
              Contacto
            </a>
          </div>

          <p className="text-sm text-stone-400">
            © 2026 Inclik. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
