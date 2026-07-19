import React, { useState, useEffect } from 'react';
import { config } from '../lib/api';
import { useLocale } from '@/contexts/LocaleContext';
import {
  TuguJogjaIcon,
  HiddenGemsIcon,
  NatureEscapesIcon,
  CulinaryLegendsIcon,
  HeritageIcon,
  AdventureIcon,
  BeachesIcon,
  FamilyFriendlyIcon,
  WeekendIdeasIcon,
} from './CategoryIcons';

interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  HiddenGems:      HiddenGemsIcon,
  NatureEscapes:   NatureEscapesIcon,
  CulinaryLegends: CulinaryLegendsIcon,
  Heritage:        HeritageIcon,
  Castle:          HeritageIcon,
  Adventure:       AdventureIcon,
  Compass:         AdventureIcon,
  Beaches:         BeachesIcon,
  Sun:             BeachesIcon,
  FamilyFriendly:  FamilyFriendlyIcon,
  Users:           FamilyFriendlyIcon,
  WeekendIdeas:    WeekendIdeasIcon,
  CalendarDays:    WeekendIdeasIcon,
  Sparkles:        HiddenGemsIcon,
  Leaf:            NatureEscapesIcon,
  Utensils:        CulinaryLegendsIcon,
};

interface CategoryLinksProps {
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

export default function CategoryLinks({ selectedCategory, onSelectCategory }: CategoryLinksProps) {
  const { t } = useLocale();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    config.getCategories().then(res => {
      if (res.status === 'success' && res.data) {
        const translated = res.data.map(cat => ({
          ...cat,
          name: t(`category.${cat.id}`) || cat.name,
          description: t(`category.${cat.id}_desc`) || cat.description,
        }));
        setCategories(translated);
      }
    }).catch(() => {});
  }, [t]);

  const pillCls = (selected: boolean) =>
    `flex flex-col items-center gap-1.5 py-2.5 px-1 rounded-2xl border transition-all duration-200 cursor-pointer ${
      selected
        ? 'bg-gold-500 border-gold-500'
        : 'bg-stone-100/80 border-stone-200/60 hover:bg-stone-200/60'
    }`;

  const iconCls = (selected: boolean) =>
    `h-7 w-7 ${selected ? 'text-royal-950' : 'text-gold-600'}`;

  const labelCls = (selected: boolean) =>
    `text-[10px] font-bold text-center leading-tight px-0.5 ${selected ? 'text-royal-950' : 'text-stone-700'}`;

  const allCats = [
    { id: null, name: t('category.all_journeys'), Icon: TuguJogjaIcon },
    ...categories.map(cat => ({
      id: cat.id,
      name: cat.name,
      Icon: ICON_MAP[cat.icon] || ICON_MAP[cat.id] || HiddenGemsIcon,
    })),
  ];

  return (
    <div id="category-links-section" className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
      <div
        id="categories-pill-row"
        className="grid gap-2"
        style={{ gridTemplateColumns: `repeat(${Math.min(allCats.length, 9)}, minmax(0, 1fr))` }}
      >
        {allCats.map(({ id, name, Icon }) => {
          const selected = selectedCategory === id;
          return (
            <button
              key={String(id)}
              id={id ? `category-btn-${id}` : 'category-btn-all'}
              onClick={() => onSelectCategory(selected ? null : id)}
              className={pillCls(selected)}
            >
              <Icon className={iconCls(selected)} />
              <span className={labelCls(selected)}>{name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
