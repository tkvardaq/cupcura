import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BrewQuiz } from './components/BrewQuiz';
import { BeverageCatalog } from './components/BeverageCatalog';
import { BeverageModal } from './components/BeverageModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { ComparisonTool } from './components/ComparisonTool';
import { BrewAssistantTimer } from './components/BrewAssistantTimer';
import { HealthMatrix } from './components/HealthMatrix';
import { AffiliateMarketplace } from './components/AffiliateMarketplace';
import { CaffeineChart } from './components/CaffeineChart';
import { SeoArticles } from './components/SeoArticles';
import { SitemapIndex } from './components/SitemapIndex';
import { PageView } from './components/PageView';
import { LegalModal } from './components/LegalModal';
import { NativeAdBanner } from './components/NativeAdBanner';
import { Footer } from './components/Footer';
import { Beverage } from './data/beverages';
import { ShopProduct } from './data/affiliateProducts';
import { BEVERAGES_MASTER, getBeverageMasterBySlug } from './data/beveragesMaster';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('catalog');
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [quizOpen, setQuizOpen] = useState<boolean>(false);
  
  // Modals
  const [selectedBeverage, setSelectedBeverage] = useState<Beverage | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ShopProduct | null>(null);
  const [legalType, setLegalType] = useState<'ftc' | 'privacy' | 'terms' | 'contact' | null>(null);

  // Hash change listener for URL #page/[slug]
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#page/')) {
        const slug = hash.replace('#page/', '');
        setActiveSlug(slug);
      } else {
        setActiveSlug(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update SEO Document Head
  useEffect(() => {
    if (activeSlug) {
      const page = getBeverageMasterBySlug(activeSlug);
      if (page) {
        document.title = `${page.seoTitle}`;
      }
    } else if (selectedBeverage) {
      document.title = `${selectedBeverage.name} | Taste Radar & Benefits | CupCura`;
    } else if (selectedProduct) {
      document.title = `${selectedProduct.name} Review & Specs | CupCura Shop`;
    } else if (activeTab === 'sitemap') {
      document.title = '100+ Page Directory & HTML Sitemap Index | CupCura';
    } else if (activeTab === 'comparison') {
      document.title = 'Side-by-Side Coffee & Tea Taste Radar Comparison Matrix | CupCura';
    } else if (activeTab === 'assistant') {
      document.title = 'Barista Yield Scaler & Extraction Brew Timer | CupCura';
    } else if (activeTab === 'health') {
      document.title = 'Coffee & Tea Health Benefits, GERD Safety & Contraindications | CupCura';
    } else if (activeTab === 'marketplace') {
      document.title = 'Curated Espresso Machines, Grinders & Artisan Bean Shop | CupCura';
    } else {
      document.title = 'CupCura | The Ultimate Global Coffee, Tea & Botanical Beverage Guide (100+ Pages)';
    }
  }, [activeTab, activeSlug, selectedBeverage, selectedProduct]);

  const handleSelectPage = (slug: string) => {
    window.location.hash = `#page/${slug}`;
    setActiveSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToDirectory = () => {
    window.location.hash = '';
    setActiveSlug(null);
  };

  const handleTabChange = (tab: string) => {
    window.location.hash = '';
    setActiveSlug(null);
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1510] flex flex-col font-sans selection:bg-[#C86D43]/20 selection:text-[#C86D43]">
      
      {/* Header Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenQuiz={() => setQuizOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* If viewing a single page out of 100 */}
        {activeSlug ? (
          <PageView
            slug={activeSlug}
            onBack={handleBackToDirectory}
            onSelectPage={handleSelectPage}
          />
        ) : (
          <>
            {/* Render Hero ONLY on Catalog/Home tab */}
            {activeTab === 'catalog' && (
              <Hero
                onOpenQuiz={() => setQuizOpen(true)}
                onExploreClick={() => {
                  handleTabChange('sitemap');
                }}
                onSelectBeverage={(bev) => setSelectedBeverage(bev)}
                totalBrews={BEVERAGES_MASTER.length}
              />
            )}

            {/* Catalog Tab View */}
            {activeTab === 'catalog' && (
              <>
                <BeverageCatalog
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  onSelectBeverage={(bev) => setSelectedBeverage(bev)}
                />
                <CaffeineChart onSelectBeverage={(bev) => setSelectedBeverage(bev)} />
                <ComparisonTool />
                <BrewAssistantTimer />
                <HealthMatrix />
                <SeoArticles />
                <SitemapIndex searchQuery={searchQuery} onSelectPage={handleSelectPage} />
                <AffiliateMarketplace onSelectProduct={(prod) => setSelectedProduct(prod)} />
              </>
            )}

            {/* Sitemap 100+ Directory Tab View (Dedicated Header) */}
            {activeTab === 'sitemap' && (
              <div className="py-6">
                <SitemapIndex searchQuery={searchQuery} onSelectPage={handleSelectPage} />
              </div>
            )}

            {/* Flavor Matrix Comparison Tab View (Dedicated View) */}
            {activeTab === 'comparison' && (
              <div className="py-6 space-y-8">
                <ComparisonTool />
                <CaffeineChart onSelectBeverage={(bev) => setSelectedBeverage(bev)} />
              </div>
            )}

            {/* Brew Timer Tab View (Dedicated View) */}
            {activeTab === 'assistant' && (
              <div className="py-6">
                <BrewAssistantTimer />
              </div>
            )}

            {/* Health & Science Tab View (Dedicated View) */}
            {activeTab === 'health' && (
              <div className="py-6 space-y-8">
                <HealthMatrix />
                <SeoArticles />
              </div>
            )}

            {/* Gear & Bean Shop Tab View (Dedicated View) */}
            {activeTab === 'marketplace' && (
              <div className="py-6">
                <AffiliateMarketplace onSelectProduct={(prod) => setSelectedProduct(prod)} />
              </div>
            )}
          </>
        )}

      </main>

      {/* Footer */}
      <Footer
        setActiveTab={handleTabChange}
        onSelectBeverage={(bev) => setSelectedBeverage(bev)}
        onSelectPageSlug={handleSelectPage}
        onOpenLegal={(type) => setLegalType(type)}
      />

      {/* Interactive Brew Quiz Wizard Modal */}
      <BrewQuiz
        isOpen={quizOpen}
        onClose={() => setQuizOpen(false)}
        onSelectBeverage={(bev) => setSelectedBeverage(bev)}
      />

      {/* Beverage Deep-Dive Detail Modal */}
      <BeverageModal
        beverage={selectedBeverage}
        onClose={() => setSelectedBeverage(null)}
      />

      {/* Product Detail Modal (with Feature Charts & Specs) */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Legal & FTC Modal */}
      <LegalModal
        isOpen={!!legalType}
        type={legalType}
        onClose={() => setLegalType(null)}
      />

    </div>
  );
}

export default App;
