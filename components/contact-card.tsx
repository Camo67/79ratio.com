import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone } from "lucide-react"

export function ContactCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-primary" />
          Office Location
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Address</p>
          <p className="font-medium">
            25 S Grove Ave Ste 501
            <br />
            Elgin, Illinois, 60120
            <br />
            United States
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Phone Number</p>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            <a href="tel:+16303942700" className="font-medium hover:text-primary transition-colors">
              630-394-2700
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
