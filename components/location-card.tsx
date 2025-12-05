import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function LocationCard() {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          Our Location
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src="/office-location-map.jpg"
            alt="79 Ratio Office Location - 25 S Grove Ave Ste 501, Elgin, Illinois 60120"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <div>25 S Grove Ave Ste 501</div>
              <div>Elgin, Illinois 60120</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">(555) 123-4567</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">info@79ratio.com</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
