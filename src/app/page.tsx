"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, Briefcase, Building, Code, DollarSign, Github, Linkedin, MessageSquare, Shield, Sparkles, TrendingUp, Twitter, Users, Wrench, Zap } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="large"
      sizing="small"
      background="animatedGrid"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="glass"
      showBlurBottom="false"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Services", id: "feature" },
            { name: "Portfolio", id: "product" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="DialedWeb"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Custom Software Solutions That Scale"
          description="We build powerful web applications, mobile apps, and enterprise software that drives your business forward. From concept to deployment, we handle it all."
          tag="Software Agency"
          tagIcon={Code}
          buttons={[
            { text: "Start Your Project", href: "contact" },
            { text: "View Portfolio", href: "product" }
          ]}
          imageSrc="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Software development dashboard interface"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About DialedWeb"
          description="We're a team of passionate software developers and designers who specialize in creating custom digital solutions. With years of experience in web development, mobile apps, and enterprise software, we help businesses transform their ideas into powerful applications."
          tag="Who We Are"
          tagIcon={Users}
          bulletPoints={[
            {
              title: "Expert Development",
              description: "Full-stack development using the latest technologies and best practices",
              icon: Code
            },
            {
              title: "Scalable Solutions",
              description: "Built to grow with your business, from startup to enterprise level",
              icon: TrendingUp
            },
            {
              title: "Agile Process",
              description: "Iterative development with regular client feedback and rapid deployment",
              icon: Zap
            },
            {
              title: "24/7 Support",
              description: "Ongoing maintenance and support to keep your applications running smoothly",
              icon: Shield
            }
          ]}
          imageSrc="https://images.pexels.com/photos/6804071/pexels-photo-6804071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="DialedWeb software development team"
          imagePosition="right"
          buttons={[{ text: "Learn More", href: "contact" }]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Our Services"
          description="Comprehensive software development services to bring your vision to life"
          tag="What We Do"
          tagIcon={Wrench}
          features={[
            {
              id: "01",
              title: "Web Development",
              description: "Custom web applications built with modern frameworks like React, Next.js, and Node.js for optimal performance and user experience",
              imageSrc: "https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Web development interface"
            },
            {
              id: "02",
              title: "Mobile App Development",
              description: "Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences",
              imageSrc: "https://images.pexels.com/photos/7947951/pexels-photo-7947951.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mobile app development"
            },
            {
              id: "03",
              title: "UI/UX Design",
              description: "User-centered design approach creating intuitive interfaces that engage users and drive conversions",
              imageSrc: "https://images.pexels.com/photos/6373160/pexels-photo-6373160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "UI UX design mockups"
            },
            {
              id: "04",
              title: "Enterprise Solutions",
              description: "Scalable enterprise software including CRM systems, analytics platforms, and business process automation",
              imageSrc: "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Enterprise CRM dashboard"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Our Portfolio"
          description="Showcasing successful projects across various industries"
          tag="Recent Work"
          tagIcon={Briefcase}
          products={[
            {
              id: "1",
              brand: "DialedWeb",
              name: "E-commerce Platform",
              price: "Custom Quote",
              rating: 5,
              reviewCount: "150+",
              imageSrc: "https://images.pexels.com/photos/267401/pexels-photo-267401.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "E-commerce platform dashboard"
            },
            {
              id: "2",
              brand: "DialedWeb",
              name: "Business CRM System",
              price: "Custom Quote",
              rating: 5,
              reviewCount: "200+",
              imageSrc: "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Business CRM system interface"
            },
            {
              id: "3",
              brand: "DialedWeb",
              name: "Analytics Dashboard",
              price: "Custom Quote",
              rating: 5,
              reviewCount: "100+",
              imageSrc: "https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Analytics dashboard interface"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Pricing Plans"
          description="Choose the perfect development package for your project needs"
          tag="Flexible Pricing"
          tagIcon={DollarSign}
          plans={[
            {
              id: "starter",
              badge: "Small Projects",
              badgeIcon: Sparkles,
              price: "$2,500+",
              subtitle: "Perfect for small businesses and startups",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Learn More", href: "contact" }
              ],
              features: [
                "Custom web application",
                "Responsive design",
                "Basic SEO optimization",
                "3 months support",
                "Source code delivery"
              ]
            },
            {
              id: "professional",
              badge: "Most Popular",
              badgeIcon: Award,
              price: "$10,000+",
              subtitle: "Best for growing businesses with complex needs",
              buttons: [
                { text: "Get Started", href: "contact" },
                { text: "Schedule Call", href: "contact" }
              ],
              features: [
                "Full-stack web application",
                "Mobile-responsive design",
                "Advanced SEO & analytics",
                "6 months support",
                "Database integration",
                "API development",
                "Performance optimization"
              ]
            },
            {
              id: "enterprise",
              badge: "Enterprise",
              badgeIcon: Building,
              price: "$25,000+",
              subtitle: "For large organizations requiring custom solutions",
              buttons: [
                { text: "Contact Sales", href: "contact" },
                { text: "Custom Quote", href: "contact" }
              ],
              features: [
                "Enterprise-grade application",
                "Scalable architecture",
                "Advanced security features",
                "12 months support",
                "Third-party integrations",
                "Custom API development",
                "Dedicated project manager",
                "Performance monitoring"
              ]
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Our Team"
          description="Meet the talented developers and designers behind DialedWeb"
          tag="The Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Alex Thompson",
              role: "Lead Developer",
              imageSrc: "https://images.pexels.com/photos/7653460/pexels-photo-7653460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Alex Thompson, Lead Developer"
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "Full-Stack Engineer",
              imageSrc: "https://images.pexels.com/photos/1181332/pexels-photo-1181332.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Chen, Full-Stack Engineer"
            },
            {
              id: "3",
              name: "Mike Rodriguez",
              role: "UI/UX Designer",
              imageSrc: "https://images.pexels.com/photos/18936296/pexels-photo-18936296.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Mike Rodriguez, UI/UX Designer"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Clients Say"
          description="Real feedback from businesses we've helped transform digitally"
          tag="Client Success"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Jennifer Walsh",
              role: "CEO",
              company: "TechStart Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Jennifer Walsh, CEO of TechStart Inc"
            },
            {
              id: "2",
              name: "David Park",
              role: "CTO",
              company: "InnovateCorp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3755824/pexels-photo-3755824.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Park, CTO of InnovateCorp"
            },
            {
              id: "3",
              name: "Lisa Martinez",
              role: "Founder",
              company: "GrowthLab",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8528742/pexels-photo-8528742.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lisa Martinez, Founder of GrowthLab"
            },
            {
              id: "4",
              name: "Robert Kim",
              role: "Operations Manager",
              company: "ScaleUp Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Robert Kim, Operations Manager"
            },
            {
              id: "5",
              name: "Emily Foster",
              role: "Marketing Director",
              company: "DigitalFirst",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7710229/pexels-photo-7710229.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Foster, Marketing Director"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Industry Leaders"
          description="Join the companies that trust DialedWeb for their software development needs"
          tag="Our Clients"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/3370333/pexels-photo-3370333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Let's Build Something Amazing Together"
          description="Ready to start your next software project? Get in touch with our team and let's discuss how we can help bring your vision to life."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "company", type: "text", placeholder: "Company Name", required: false },
            { name: "budget", type: "text", placeholder: "Project Budget", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your project...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
          imageSrc="https://images.pexels.com/photos/4386363/pexels-photo-4386363.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="DialedWeb office space"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="DialedWeb"
          columns={[
            {
              title: "Services",
              items: [
                { label: "Web Development", href: "feature" },
                { label: "Mobile Apps", href: "feature" },
                { label: "UI/UX Design", href: "feature" },
                { label: "Enterprise Solutions", href: "feature" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Portfolio", href: "product" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Pricing", href: "pricing" },
                { label: "Testimonials", href: "testimonial" },
                { label: "FAQ", href: "contact" },
                { label: "Support", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Github,
              url: "https://github.com/dialedweb",
              ariaLabel: "GitHub"
            },
            {
              icon: Linkedin,
              url: "https://linkedin.com/company/dialedweb",
              ariaLabel: "LinkedIn"
            },
            {
              icon: Twitter,
              url: "https://twitter.com/dialedweb",
              ariaLabel: "Twitter"
            }
          ]}
          copyrightText="© 2025 DialedWeb. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}