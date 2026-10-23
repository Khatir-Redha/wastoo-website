import Image from "next/image";
import {
  Building2,
  Link2,
  Network,
  Search,
  Truck,
  UserRound,
} from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { Accordion } from "@/components/ui/accordion";
import { buttonStyles } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/lib/site";

export async function Hero() {
  const t = await getTranslations("hero");
  const roles = await getTranslations("roles");

  return (
    <section className="hero" id="hero" aria-labelledby="hero-heading">
      <Container className="hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">{t("eyebrow")}</p>
          <h1 className="hero__title" id="hero-heading">
            {t("headlinePrefix")}{" "}
            <span className="hero__highlight">{t("headlineHighlight")}</span>
          </h1>
          <p className="hero__description">{t("description")}</p>
          <div className="hero__actions">
            <a
              className={buttonStyles({ variant: "primary", size: "md" })}
              href="#how"
            >
              {t("primaryCta")}
            </a>
            <a
              className={buttonStyles({ variant: "secondary", size: "md" })}
              href="#launch"
            >
              {t("secondaryCta")}
            </a>
          </div>
          <p className="hero__status">{t("launchStatus")}</p>
        </div>

        <div className="hero__media">
          <div className="hero__device">
            <Image
              src="/screens/map-app.png"
              alt={t("mapAlt")}
              width={1080}
              height={2340}
              sizes="(max-width: 63.999rem) 86vw, 24rem"
              loading="eager"
              fetchPriority="high"
              className="hero__screen"
            />
            <Image
              src="/screens/phone-mockup.png"
              alt=""
              aria-hidden="true"
              width={471}
              height={963}
              sizes="(max-width: 63.999rem) 86vw, 24rem"
              loading="eager"
              className="hero__frame"
            />
          </div>
          <div
            className="hero__roles"
            role="group"
            aria-label={roles("heading")}
          >
            <Chip>{roles("citizensTitle")}</Chip>
            <Chip>{roles("collectorsTitle")}</Chip>
            <Chip>{roles("centersTitle")}</Chip>
          </div>
        </div>
      </Container>
    </section>
  );
}

export async function ProductPreview() {
  const t = await getTranslations("product");

  return (
    <section
      className="product-preview"
      id="product"
      aria-labelledby="product-heading"
    >
      <Container className="product-preview__inner">
        <SectionHeading
          className="product-preview__heading"
          eyebrow={t("eyebrow")}
          title={t("heading")}
          lead={t("lead")}
        />

        <div
          className="product-preview__gallery"
          role="region"
          aria-label={t("galleryLabel")}
          tabIndex={0}
        >
          <figure className="product-preview__card">
            <div className="product-preview__screen">
              <Image
                src="/screens/app-list-preview.png"
                alt={t("postsAlt")}
                width={1080}
                height={2235}
                sizes="(max-width: 63.999rem) 86vw, 30vw"
                className="product-preview__image"
              />
            </div>
            <figcaption>
              <strong>{t("postsTitle")}</strong>
              <span>{t("postsCaption")}</span>
            </figcaption>
          </figure>

          <figure className="product-preview__card">
            <div className="product-preview__screen">
              <Image
                src="/screens/map-app-preview.png"
                alt={t("mapAlt")}
                width={1080}
                height={2235}
                sizes="(max-width: 63.999rem) 86vw, 30vw"
                className="product-preview__image"
              />
            </div>
            <figcaption>
              <strong>{t("mapTitle")}</strong>
              <span>{t("mapCaption")}</span>
            </figcaption>
          </figure>

          <figure className="product-preview__card">
            <div className="product-preview__screen">
              <Image
                src="/screens/app-flow-preview.png"
                alt={t("flowAlt")}
                width={1080}
                height={2235}
                sizes="(max-width: 63.999rem) 86vw, 30vw"
                className="product-preview__image"
              />
            </div>
            <figcaption>
              <strong>{t("flowTitle")}</strong>
              <span>{t("flowCaption")}</span>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}

export async function Problem() {
  const t = await getTranslations("problem");

  return (
    <section
      className="problem section-space"
      id="problem"
      aria-labelledby="problem-heading"
    >
      <Container className="problem__inner">
        <header className="problem__intro">
          <h2 id="problem-heading">{t("heading")}</h2>
          <p>{t("lead")}</p>
        </header>
        <div className="problem__points">
          <article className="problem__point">
            <span className="problem__icon" aria-hidden="true">
              <Search size={22} />
            </span>
            <h3>{t("discoveryTitle")}</h3>
            <p>{t("discoveryDescription")}</p>
          </article>
          <article className="problem__point">
            <span className="problem__icon" aria-hidden="true">
              <Link2 size={22} />
            </span>
            <h3>{t("connectionTitle")}</h3>
            <p>{t("connectionDescription")}</p>
          </article>
          <article className="problem__point">
            <span className="problem__icon" aria-hidden="true">
              <Network size={22} />
            </span>
            <h3>{t("organizationTitle")}</h3>
            <p>{t("organizationDescription")}</p>
          </article>
        </div>
      </Container>
    </section>
  );
}

export async function HowItWorks() {
  const t = await getTranslations("how");
  const locale = await getLocale();
  const formatNumber = (number: number) =>
    new Intl.NumberFormat(locale, { useGrouping: false }).format(number);

  return (
    <section
      className="how section-space"
      id="how"
      aria-labelledby="how-heading"
    >
      <Container className="how__inner">
        <SectionHeading
          className="how__heading"
          headingId="how-heading"
          title={t("heading")}
        />
        <ol className="how__steps">
          <li className="how__step">
            <span className="how__step-marker" aria-hidden="true">
              {formatNumber(1)}
            </span>
            <h3>{t("discoverTitle")}</h3>
            <p>{t("discoverDescription")}</p>
            <div className="how__step-visual">
              <Image
                src="/screens/app-list-preview.png"
                alt={t("discoverScreenAlt")}
                width={1080}
                height={2235}
                sizes="(max-width: 47.999rem) 100vw, 32vw"
                className="how__step-image"
              />
            </div>
          </li>
          <li className="how__step">
            <span className="how__step-marker" aria-hidden="true">
              {formatNumber(2)}
            </span>
            <h3>{t("connectTitle")}</h3>
            <p>{t("connectDescription")}</p>
          </li>
          <li className="how__step">
            <span className="how__step-marker" aria-hidden="true">
              {formatNumber(3)}
            </span>
            <h3>{t("actionTitle")}</h3>
            <p>{t("actionDescription")}</p>
            <div className="how__step-visual">
              <Image
                src="/screens/app-flow-preview.png"
                alt={t("actionScreenAlt")}
                width={1080}
                height={2235}
                sizes="(max-width: 47.999rem) 100vw, 32vw"
                className="how__step-image"
              />
            </div>
          </li>
        </ol>
      </Container>
    </section>
  );
}

export async function Roles() {
  const t = await getTranslations("roles");

  return (
    <section
      className="roles section-space"
      id="roles"
      aria-labelledby="roles-heading"
    >
      <Container className="roles__inner">
        <SectionHeading
          className="roles__heading"
          headingId="roles-heading"
          title={t("heading")}
          lead={t("lead")}
        />
        <div className="roles__cards">
          <article className="roles__card">
            <span className="roles__icon" aria-hidden="true">
              <UserRound size={24} />
            </span>
            <h3>{t("citizensTitle")}</h3>
            <p>{t("citizensDescription")}</p>
            <p className="roles__in-app">
              <strong>{t("inAppLabel")}</strong> {t("citizensInApp")}
            </p>
          </article>
          <article className="roles__card">
            <span className="roles__icon" aria-hidden="true">
              <Truck size={24} />
            </span>
            <h3>{t("collectorsTitle")}</h3>
            <p>{t("collectorsDescription")}</p>
          </article>
          <article className="roles__card">
            <span className="roles__icon" aria-hidden="true">
              <Building2 size={24} />
            </span>
            <h3>{t("centersTitle")}</h3>
            <p>{t("centersDescription")}</p>
          </article>
        </div>
      </Container>
    </section>
  );
}

export async function Mission() {
  const t = await getTranslations("mission");

  return (
    <section
      className="mission section-space"
      id="mission"
      aria-labelledby="mission-heading"
    >
      <Container className="mission__inner">
        <div className="mission__copy">
          <h2 id="mission-heading">{t("heading")}</h2>
          <p>{t("description")}</p>
        </div>
        <svg
          className="mission__graphic"
          viewBox="0 0 480 360"
          fill="none"
          role="img"
          aria-labelledby="mission-graphic-title"
        >
          <title id="mission-graphic-title">{t("graphicLabel")}</title>
          <path
            d="M104 180 184 92l112 24 80 92-74 88-126-16-72-100Z"
            stroke="currentColor"
            strokeOpacity=".34"
            strokeWidth="2"
          />
          <path
            d="m184 92 64 88 48-64m-48 64 108 28m-108-28-54 100m54-100-150 0m150 0 30 88"
            stroke="currentColor"
            strokeOpacity=".5"
            strokeWidth="2"
          />
          <circle cx="104" cy="180" r="11" fill="#42D6B0" />
          <circle cx="184" cy="92" r="15" fill="#42D6B0" />
          <circle cx="296" cy="116" r="10" fill="#087F5B" />
          <circle cx="376" cy="208" r="18" fill="#42D6B0" />
          <circle cx="302" cy="296" r="12" fill="#087F5B" />
          <circle cx="176" cy="280" r="9" fill="#42D6B0" />
          <circle cx="248" cy="180" r="24" fill="#F0F6F2" />
          <circle cx="248" cy="180" r="10" fill="#42D6B0" />
          <circle cx="298" cy="74" r="5" fill="#42D6B0" fillOpacity=".7" />
          <circle cx="394" cy="128" r="6" fill="#42D6B0" fillOpacity=".7" />
          <circle cx="108" cy="258" r="5" fill="#42D6B0" fillOpacity=".7" />
        </svg>
      </Container>
    </section>
  );
}

export async function Launch() {
  const t = await getTranslations("launch");

  return (
    <section
      className="launch section-space"
      id="launch"
      aria-labelledby="launch-heading"
    >
      <Container className="launch__inner">
        <div className="launch__copy">
          <p className="launch__eyebrow">{t("eyebrow")}</p>
          <h2 id="launch-heading">{t("heading")}</h2>
          <p className="launch__description">{t("description")}</p>
        </div>
        <div className="launch__contact">
          <a
            className={buttonStyles({
              variant: "primary",
              size: "md",
              className: "launch__primary-cta",
            })}
            href={`mailto:${site.contactEmail}`}
          >
            {t("emailCta")}
          </a>
          <p className="launch__privacy">{t("privacyNotice")}</p>
          <div className="launch__social">
            <p>{t("socialLead")}</p>
            <ul>
              {site.socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export async function FAQ() {
  const t = await getTranslations("faq");

  return (
    <section
      className="faq section-space"
      id="faq"
      aria-labelledby="faq-heading"
    >
      <Container className="faq__inner">
        <SectionHeading
          className="faq__heading"
          headingId="faq-heading"
          title={t("heading")}
          lead={t("lead")}
        />
        <Accordion
          className="faq__accordion"
          items={[
            {
              title: t("question1"),
              children: <p>{t("answer1")}</p>,
            },
            {
              title: t("question2"),
              children: <p>{t("answer2")}</p>,
            },
            {
              title: t("question3"),
              children: <p>{t("answer3")}</p>,
            },
            {
              title: t("question4"),
              children: <p>{t("answer4")}</p>,
            },
            {
              title: t("question5"),
              children: (
                <p>
                  {t("answer5")}{" "}
                  <a href={`mailto:${site.contactEmail}`}>
                    {site.contactEmail}
                  </a>
                </p>
              ),
            },
          ]}
        />
      </Container>
    </section>
  );
}
