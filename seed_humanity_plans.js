const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding HealthSakhi Humanity Pricing plans...');

  // Archive any old plans that are not part of the Humanity Pricing model
  const activeSlugs = [
    'free-sakhi',
    'access-sakhi',
    'fair-value-sakhi',
    'supporter-sakhi',
    'patron-sakhi'
  ];

  await prisma.plan.updateMany({
    where: {
      slug: { notIn: activeSlugs }
    },
    data: {
      status: 'ARCHIVED'
    }
  });

  const humanityPlans = [
    {
      name: 'Free 30-Day Trial',
      slug: 'free-sakhi',
      price: 0,
      originalPrice: 0,
      interval: 'MONTHLY',
      status: 'ACTIVE',
      maxAiChatsPerDay: 999999,
      advisorCredits: 1,
      features: [
        { featureName: 'Duration', featureValue: '30 Days Free Trial' },
        { featureName: 'Short Description', featureValue: 'Explore everything for 30 days completely free. No payment required.' },
        { featureName: 'Highlight Tag', featureValue: '30 DAYS FREE 🌸' },
        { featureName: 'Price Subtext', featureValue: 'THEN YOU DECIDE' },
        { featureName: 'Quote', featureValue: '“Use it first. Feel the value. Then decide what it is worth to you.”' },
        { featureName: 'Feature 1', featureValue: 'Full Access to HealthSakhi Core' },
        { featureName: 'Feature 2', featureValue: 'AI Health Companion 24/7' },
        { featureName: 'Feature 3', featureValue: 'Audio & Multilingual Library' },
        { featureName: 'Feature 4', featureValue: 'Period & Mood Tracking' }
      ]
    },
    {
      name: 'Access',
      slug: 'access-sakhi',
      price: 999,
      originalPrice: 1999,
      interval: 'YEARLY',
      status: 'ACTIVE',
      maxAiChatsPerDay: 999999,
      advisorCredits: 1,
      features: [
        { featureName: 'Duration', featureValue: '1 Year' },
        { featureName: 'Short Description', featureValue: '“HealthSakhi helps me, but I need affordable access.”' },
        { featureName: 'Highlight Tag', featureValue: 'ACCESS' },
        { featureName: 'Price Subtext', featureValue: '₹999 / YEAR' },
        { featureName: 'Quote', featureValue: '“HealthSakhi helps me, but I need affordable access.”' },
        { featureName: 'Feature 1', featureValue: 'Meaningful Core HealthSakhi Experience' },
        { featureName: 'Feature 2', featureValue: 'Full Audio & Multilingual Education' },
        { featureName: 'Feature 3', featureValue: 'AI Health Companion 24/7' },
        { featureName: 'Feature 4', featureValue: 'Period & Family Wellness Tracker' },
        { featureName: 'Feature 5', featureValue: 'Sisterhood Circles & Support' }
      ]
    },
    {
      name: 'Fair Value',
      slug: 'fair-value-sakhi',
      price: 2999,
      originalPrice: 3999,
      interval: 'YEARLY',
      status: 'ACTIVE',
      maxAiChatsPerDay: 999999,
      advisorCredits: 2,
      features: [
        { featureName: 'Duration', featureValue: '1 Year' },
        { featureName: 'Short Description', featureValue: '“I received real value and this feels like a fair contribution.”' },
        { featureName: 'Highlight Tag', featureValue: 'FAIR VALUE ⭐' },
        { featureName: 'Price Subtext', featureValue: '₹2,999 / YEAR' },
        { featureName: 'Quote', featureValue: '“I received real value and this feels like a fair contribution.”' },
        { featureName: 'Feature 1', featureValue: 'Complete Core HealthSakhi Experience' },
        { featureName: 'Feature 2', featureValue: 'Full Audio & Multilingual Education' },
        { featureName: 'Feature 3', featureValue: 'AI Health Companion 24/7' },
        { featureName: 'Feature 4', featureValue: 'Wellness Certificate of Completion' },
        { featureName: 'Feature 5', featureValue: 'Special Educational Sessions' }
      ]
    },
    {
      name: 'Supporter',
      slug: 'supporter-sakhi',
      price: 4999,
      originalPrice: 6999,
      interval: 'YEARLY',
      status: 'ACTIVE',
      maxAiChatsPerDay: 999999,
      advisorCredits: 3,
      features: [
        { featureName: 'Duration', featureValue: '1 Year' },
        { featureName: 'Short Description', featureValue: '“I value HealthSakhi and want to support its growth.”' },
        { featureName: 'Highlight Tag', featureValue: 'SUPPORTER' },
        { featureName: 'Price Subtext', featureValue: '₹4,999 / YEAR' },
        { featureName: 'Quote', featureValue: '“I value HealthSakhi and want to support its growth.”' },
        { featureName: 'Feature 1', featureValue: 'Complete Core HealthSakhi Experience' },
        { featureName: 'Feature 2', featureValue: 'Advanced Learning Resources' },
        { featureName: 'Feature 3', featureValue: 'Early Access to Selected Features' },
        { featureName: 'Feature 4', featureValue: 'Wellness Certificate & Priority AI' },
        { featureName: 'Feature 5', featureValue: 'Direct Support Sisterhood Circle' }
      ]
    },
    {
      name: 'Patron / Pay It Forward',
      slug: 'patron-sakhi',
      price: 9999,
      originalPrice: 14999,
      interval: 'YEARLY',
      status: 'ACTIVE',
      maxAiChatsPerDay: 999999,
      advisorCredits: 5,
      features: [
        { featureName: 'Duration', featureValue: '1 Year' },
        { featureName: 'Short Description', featureValue: '“I can contribute more and help HealthSakhi reach women who may not be able to.”' },
        { featureName: 'Highlight Tag', featureValue: 'PAY IT FORWARD ❤️' },
        { featureName: 'Price Subtext', featureValue: '₹9,999 / YEAR' },
        { featureName: 'Quote', featureValue: '“I can contribute more and help HealthSakhi reach women who may not be able to.”' },
        { featureName: 'Feature 1', featureValue: 'Complete Core HealthSakhi Experience' },
        { featureName: 'Feature 2', featureValue: 'Help Keep HealthSakhi Accessible to Another Woman' },
        { featureName: 'Feature 3', featureValue: 'Opportunities to Participate in HealthSakhi Initiatives' },
        { featureName: 'Feature 4', featureValue: 'Advanced Resources & Early Access' },
        { featureName: 'Feature 5', featureValue: 'Special Educational Sessions & Direct Support' }
      ]
    }
  ];

  for (const planData of humanityPlans) {
    const { features, ...planFields } = planData;

    let existing = await prisma.plan.findFirst({
      where: { slug: planFields.slug }
    });

    if (existing) {
      await prisma.plan.update({
        where: { id: existing.id },
        data: planFields
      });
      console.log(`Updated plan: ${planFields.name}`);
    } else {
      existing = await prisma.plan.create({
        data: planFields
      });
      console.log(`Created plan: ${planFields.name}`);
    }

    // Replace features
    await prisma.planFeature.deleteMany({
      where: { planId: existing.id }
    });

    await prisma.planFeature.createMany({
      data: features.map(f => ({
        planId: existing.id,
        featureName: f.featureName,
        featureValue: f.featureValue
      }))
    });
  }

  console.log('Humanity plans seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
