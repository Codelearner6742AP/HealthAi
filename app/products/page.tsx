import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ShoppingBag, Search, Tag, ArrowRight } from "lucide-react"

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Organic Multivitamin",
      price: "$29.99",
      image: "/placeholder.svg?height=200&width=200",
      category: "Supplements",
    },
    {
      id: 2,
      name: "Sleep Support Formula",
      price: "$24.99",
      image: "/placeholder.svg?height=200&width=200",
      category: "Wellness",
    },
    {
      id: 3,
      name: "Protein Powder",
      price: "$39.99",
      image: "/placeholder.svg?height=200&width=200",
      category: "Nutrition",
    },
    {
      id: 4,
      name: "Digital Fitness Tracker",
      price: "$89.99",
      image: "/placeholder.svg?height=200&width=200",
      category: "Devices",
    },
    {
      id: 5,
      name: "Omega-3 Fish Oil",
      price: "$19.99",
      image: "/placeholder.svg?height=200&width=200",
      category: "Supplements",
    },
    {
      id: 6,
      name: "Meditation Headband",
      price: "$149.99",
      image: "/placeholder.svg?height=200&width=200",
      category: "Devices",
    },
    {
      id: 7,
      name: "Probiotic Complex",
      price: "$34.99",
      image: "/placeholder.svg?height=200&width=200",
      category: "Supplements",
    },
    {
      id: 8,
      name: "Plant-Based Protein Bars",
      price: "$24.99",
      image: "/placeholder.svg?height=200&width=200",
      category: "Nutrition",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="py-16 md:py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-500">
                Discover Health Products
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find the perfect health products for your needs with our Shopify-powered marketplace.
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for health products..."
                className="w-full pl-12 pr-4 py-3 rounded-full border-gray-300 dark:border-gray-700 shadow-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Search
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {["All", "Supplements", "Nutrition", "Wellness", "Devices"].map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={index === 0 ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.map((product) => (
              <Card
                key={product.id}
                className="h-full overflow-hidden border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative pt-4 px-4">
                  <span className="absolute top-6 left-6 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                    <Tag className="h-3 w-3" />
                    {product.category}
                  </span>
                  <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 p-4 flex items-center justify-center h-48">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-gray-100">{product.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-bold">{product.price}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    <span>Add to Cart</span>
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Load More Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-500">
              Featured Categories
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "Supplements", image: "/placeholder.svg?height=300&width=300", count: 48 },
              { name: "Nutrition", image: "/placeholder.svg?height=300&width=300", count: 36 },
              { name: "Wellness", image: "/placeholder.svg?height=300&width=300", count: 24 },
              { name: "Devices", image: "/placeholder.svg?height=300&width=300", count: 18 },
            ].map((category, index) => (
              <div key={index} className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 z-10"></div>
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
                  <p className="text-gray-200">{category.count} Products</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get Personalized Product Recommendations
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                Let our AI assistant suggest the perfect health products based on your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Recommendations
                </Button>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

