import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <Card>
        <CardHeader>
          <CardTitle>Coming Soon!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">
            "Good things come to those who wait... but better things come to those who code while waiting."
          </p>
          <p className="italic text-gray-600">
            Our blog is currently brewing like a perfect cup of coffee. Stay tuned for some data-driven insights and
            AI-powered musings!
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

