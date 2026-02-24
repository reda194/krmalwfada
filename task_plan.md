# Task Plan

## Goal
رفع جاهزية موقع كرم الوفادة للإطلاق عبر إصلاح مسارات التحويل، الثقة القانونية، SEO التقني، وإمكانية الوصول.

## Phases
- [completed] Phase 1: إصلاحات حرجة للثقة والتحويل (روابط CTA + صفحات قانونية + روابط داخلية)
- [completed] Phase 2: SEO تقني (metadata كاملة + canonical + OG/Twitter + robots + sitemap)
- [completed] Phase 3: Accessibility وتحسين البنية (labels, heading order, aria labels, keyboard/mobile interactions)
- [completed] Phase 4: Hardening واختبارات نهائية (headers + lint/build + إعادة تدقيق)

## Notes
- المشروع Next.js App Router.
- يجب الحفاظ على الشكل الحالي مع تحسينات وظيفية واضحة.

## Errors Encountered
- ESLint `react-hooks/set-state-in-effect` في `TrustBar` بعد محاولة إظهار عداد SSR.
  - الحل: إزالة `setCount(0)` المتزامن داخل `useEffect`.
- ESLint `@next/next/no-html-link-for-pages` في صفحات app الجديدة.
  - الحل: استبدال روابط `<a href=\"/...\">` الداخلية بـ `<Link>`.
