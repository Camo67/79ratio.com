import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, FileText, Lock, Mail, Globe2 } from "lucide-react"
import Link from "next/link"

const policySections = [
  {
    title: "Overview",
    icon: ShieldCheck,
    paragraphs: [
      "Your privacy is very important to us. Accordingly, we have developed this policy in order for you to understand how we collect, communicate and make use of personal information. The following outlines our privacy policy:",
      'When accessing the https://www.79Ratio.com website, 79Ratio will learn certain information about you during your visit. Similar to other commercial websites, our website utilizes a standard technology called "cookies" (see explanation below) and server logs to collect information about how our site is used. Information gathered through cookies and server logs may include the date and time of visits, the pages viewed, time spent at our site, and the websites visited just before and just after our own, as well as your IP address.',
    ],
  },
  {
    title: "Use of Cookies",
    icon: FileText,
    paragraphs: [
      "A cookie is a very small text document, which often includes an anonymous unique identifier. When you visit a website, that site's computer asks your computer for permission to store this file in a part of your hard drive specifically designated for cookies. Each website can send its own cookie to your browser if your browser's preferences allow it, but (to protect your privacy) your browser only permits a website to access the cookies it has already sent to you, not the cookies sent to you by other sites.",
    ],
  },
  {
    title: "IP Addresses",
    icon: Globe2,
    paragraphs: [
      'IP addresses are used by your computer every time you are connected to the Internet. Your IP address is a number that is used by computers on the network to identify your computer. IP addresses are automatically collected by our web server as part of demographic and profile data known as "traffic data" so that data (such as the Web pages you request) can be sent to you.',
    ],
  },
  {
    title: "Email Information",
    icon: Mail,
    paragraphs: [
      "If you choose to correspond with us through email, we may retain the content of your email messages together with your email address and our responses. We provide the same protections for these electronic communications that we employ in the maintenance of information received online, mail and telephone. This also applies when you register for our website, sign up through any of our forms using your email address or make a purchase on this site. For further information see the email policies below.",
    ],
  },
  {
    title: "How Do We Use the Information That You Provide to Us?",
    icon: ShieldCheck,
    paragraphs: [
      "Broadly speaking, we use personal information for purposes of administering our business activities, providing customer service and making available other items and services to our customers and prospective customers.",
      "79Ratio will not obtain personally-identifying information about you when you visit our site, unless you choose to provide such information to us, nor will such information be sold or otherwise transferred to unaffiliated third parties without the approval of the user at the time of collection. We may disclose information when legally compelled to do so, in other words, when we, in good faith, believe that the law requires it or for the protection of our legal rights.",
    ],
  },
  {
    title: "Email Policies",
    icon: Mail,
    paragraphs: [
      "We are committed to keeping your email address confidential. We do not sell, rent, or lease our subscription lists to third parties, and we will not provide your personal information to any third-party individual, government agency, or company at any time unless strictly compelled to do so by law.",
      "We will use your email address solely to provide timely information about 79Ratio. We will maintain the information you send via email in accordance with applicable federal law.",
    ],
  },
  {
    title: "CAN-SPAM Compliance",
    icon: FileText,
    paragraphs: [
      "In compliance with the CAN-SPAM Act, all email sent from our organization will clearly state who the email is from and provide clear information on how to contact the sender. In addition, all email messages will also contain concise information on how to remove yourself from our mailing list so that you receive no further email communication from us.",
    ],
  },
  {
    title: "Choice/Opt-Out",
    icon: FileText,
    paragraphs: [
      "Our site provides users the opportunity to opt-out of receiving communications from us and our partners by reading the unsubscribe instructions located at the bottom of any email they receive from us at any time.",
      "Users who no longer wish to receive our newsletter or promotional materials may opt-out of receiving these communications by clicking on the unsubscribe link in the email.",
    ],
  },
  {
    title: "Use of External Links",
    icon: Globe2,
    paragraphs: [
      "www.79Ratio.com may contain links to many other websites. 79Ratio cannot guarantee the accuracy of information found at any linked site. Links to or from external sites not owned or controlled by 79Ratio do not constitute an endorsement by 79Ratio or any of its employees of the sponsors of these sites or the products or information presented therein.",
    ],
  },
  {
    title: "Terms of Use",
    icon: FileText,
    paragraphs: [
      "By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.",
    ],
  },
  {
    title: "Intellectual Property Rights",
    icon: Lock,
    paragraphs: [
      "All copyrights, trademarks, patents and other intellectual property rights in and on our website and all content and software located on the site shall remain the sole property of 79Ratio or its licensors. The use of our trademarks, content and intellectual property is forbidden without the express written consent from 79Ratio.",
    ],
    bullets: [
      "Republish material from our website without prior written consent.",
      "Sell or rent material from our website.",
      "Reproduce, duplicate, create derivative, copy or otherwise exploit material on our website for any purpose.",
      "Redistribute any content from our website, including onto another website.",
    ],
  },
  {
    title: "Acceptable Use",
    icon: ShieldCheck,
    paragraphs: [
      "You agree to use our website only for lawful purposes, and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content or disrupting the normal flow of dialogue within our website.",
      "You must not use our website to send unsolicited commercial communications. You must not use the content on our website for any marketing related purpose without our express written consent.",
    ],
  },
  {
    title: "Restricted Access",
    icon: Lock,
    paragraphs: [
      "We may in the future need to restrict access to parts (or all) of our website and reserve full rights to do so. If, at any point, we provide you with a username and password for you to access restricted areas of our website, you must ensure that both your username and password are kept confidential.",
    ],
  },
  {
    title: "Use of Testimonials",
    icon: FileText,
    paragraphs: [
      "In accordance with the FTC guidelines concerning the use of endorsements and testimonials in advertising, please be aware of the following:",
      "Testimonials that appear on this site are actually received via text, audio or video submission. They are individual experiences, reflecting real life experiences of those who have used our products and/or services in some way. They are individual results, and results vary. We do not claim that they are typical results. The testimonials are not necessarily representative of all of those who will use our products and/or services.",
      "The testimonials displayed in any form on this site (text, audio, video or other) are reproduced verbatim, except for correction of grammatical or typing errors. Some may have been shortened. In other words, not the whole message received by the testimonial writer is displayed when it seems too lengthy or not the whole statement seems relevant for the general public.",
      "79Ratio is not responsible for any of the opinions or comments posted on www.79Ratio.com. 79Ratio is not a forum for testimonials, however provides testimonials as a means for customers to share their experiences with one another. To protect against abuse, all testimonials appear after they have been reviewed by management of 79Ratio. 79Ratio does not share the opinions, views or commentary of any testimonials on www.79Ratio.com - the opinions are strictly the views of the testimonial source.",
      "The testimonials are never intended to make claims that our products and/or services can be used to diagnose, treat, cure, mitigate or prevent any disease. Any such claims, implicit or explicit, in any shape or form, have not been clinically tested or evaluated.",
    ],
  },
  {
    title: "How Do We Protect Your Information and Secure Information Transmissions?",
    icon: ShieldCheck,
    paragraphs: [
      "Email is not recognized as a secure medium of communication. For this reason, we request that you do not send private information to us by email. However, doing so is allowed, but at your own risk. Some of the information you may enter on our website may be transmitted securely via a secure medium known as Secure Sockets Layer, or SSL. Credit card information and other sensitive information is never transmitted via email.",
      "79Ratio may use software programs to create summary statistics, which are used for such purposes as assessing the number of visitors to the different sections of our site, what information is of most and least interest, determining technical design specifications, and identifying system performance or problem areas.",
      "For site security purposes and to ensure that this service remains available to all users, 79Ratio uses software programs to monitor network traffic to identify unauthorized attempts to upload or change information, or otherwise cause damage.",
    ],
  },
  {
    title: "Disclaimer and Limitation of Liability",
    icon: FileText,
    paragraphs: [
      "79Ratio makes no representations, warranties, or assurances as to the accuracy, currency or completeness of the content contain on this website or any sites linked to this site.",
      'All the materials on this site are provided "as is" without any express or implied warranty of any kind, including warranties of merchantability, noninfringement of intellectual property or fitness for any particular purpose. In no event shall 79Ratio or its agents or associates be liable for any damages whatsoever (including, without limitation, damages for loss of profits, business interruption, loss of information, injury or death) arising out of the use of or inability to use the materials, even if 79Ratio has been advised of the possibility of such loss or damages.',
    ],
  },
  {
    title: "Policy Changes",
    icon: FileText,
    paragraphs: [
      "We reserve the right to amend this privacy policy at any time with or without notice. However, please be assured that if the privacy policy changes in the future, we will not use the personal information you have submitted to us under this privacy policy in a manner that is materially inconsistent with this privacy policy, without your prior consent.",
      "We are committed to conducting our business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained.",
    ],
  },
  {
    title: "Information & Disclosures of Personal Data Under GDPR",
    icon: Globe2,
    paragraphs: [
      "GDPR requires that personal data from the EEA is subject to special protection. GDPR also provides EU-based individuals with certain individual rights with respect to their personal information. We will make all reasonable efforts to abide by GDPR and provide at least the same level of data protection for personal data received and processed from the EU as the privacy protections set forth in our privacy policy. We will also make reasonable attempts to accommodate requests by Data Subjects to exercise GDPR rights. Where necessary and appropriate, we have implemented organizational and technical measures that include internal data protection policies and maintaining documentation on our processing activities.",
    ],
  },
  {
    title: "Contact",
    icon: Mail,
    paragraphs: [
      "If you have any questions regarding this policy, or your dealings with our website, please contact us here:",
      "www.79Ratio.com",
      "79Ratio",
      "25 S. Grove Ave. Elgin, IL 60120",
    ],
  },
]

const smsPrivacy = [
  {
    title: "Collection of Information",
    paragraphs: [
      'Through your use of the Messaging Service, we will receive Personal Information through our third-party service provider. "Personal Information" is information that individually identifies you, such as your mobile phone number you provided when signing up for the Messaging Service, any user or screen name that you select in connection with the Messaging Service, any comments or feedback regarding the Messaging Service that you send to us, or any other information that you choose to include in messages you send through the Messaging Service. When you send messages via the Messaging Service, we will also collect your messaging history and any information included in those messages.',
      "We may also collect Personal Information about you using cookies or similar technologies. Cookies are pieces of information that are stored by your browser on the hard drive or memory of your device. Cookies enable personalization of your experience on the Messaging Service (e.g., sending you personalized text messages such as shopping cart reminders).",
    ],
  },
  {
    title: "Use of Information",
    paragraphs: [
      "We use Personal Information to deliver, analyze, maintain and support the Messaging Service. We may also use Personal Information to enhance the Messaging Service features and customize and personalize your experiences on the Messaging Service.",
      "We will not share your mobile information with third parties for marketing purposes without your explicit consent.",
    ],
  },
  {
    title: "Protection of Information",
    paragraphs: [
      "We take a variety of physical, technical, administrative, and organizational security measures based on the sensitivity of the information we collect to protect your Personal Information against accidental or unlawful destruction or accidental loss, alteration, unauthorized disclosure or access. Unfortunately, no online activity can be guaranteed to be 100% secure. You should note that in using the Messaging Service, your information will travel through third-party infrastructures which are not under our control (such as a third-party provider's SMS delivery platform or your carrier network). While we strive to protect your information against unauthorized use or disclosure, we cannot ensure or warrant the security of any information you provide. By using the Messaging Service, you agree that we are not liable for any unintentional disclosure.",
      "For inquiries or concerns regarding the messaging service, please contact us at helpedesk@79ratio.com or call us at 844-321-7284",
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Navigation />

      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-drift"
            style={{ backgroundImage: "url(/compliance-bg.png)", filter: "brightness(0.25)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Badge className="mx-auto w-fit bg-primary/20 text-primary border border-primary/30 uppercase tracking-wide">
            Privacy Policy
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance">Privacy & Data Protection</h1>
          <p className="text-lg text-white/90 leading-relaxed text-pretty">
            The following policy mirrors the official 79 Ratio privacy policy published at 79ratio.com, covering how we
            collect, use, protect, and disclose information across our website, communications, and messaging services.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-black shadow-lg shadow-primary/25 hover:shadow-primary/40 transition"
            >
              Contact Us
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
            >
              View Resources
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid md:grid-cols-2 gap-6">
            {policySections.map((section) => {
              const Icon = section.icon
              return (
                <Card key={section.title} className="bg-black/70 border border-primary/25 backdrop-blur-sm h-full">
                  <CardHeader className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <CardTitle className="text-white text-lg">{section.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={`${section.title}-${index}`} className="text-sm text-white/90 leading-relaxed text-pretty">
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets && (
                      <ul className="list-disc list-inside space-y-2 text-sm text-white/90">
                        {section.bullets.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <div>
                <p className="text-primary uppercase text-xs tracking-[0.25em] font-semibold">Messaging</p>
                <h2 className="text-2xl lg:text-3xl font-bold text-white text-balance">SMS Messaging Privacy</h2>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {smsPrivacy.map((section) => (
                <Card key={section.title} className="bg-black/70 border border-primary/25 backdrop-blur-sm h-full">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={`${section.title}-${index}`} className="text-sm text-white/90 leading-relaxed text-pretty">
                        {paragraph}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
