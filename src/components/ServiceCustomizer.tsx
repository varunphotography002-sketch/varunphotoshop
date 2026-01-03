import { useState } from 'react';
import { Check } from '@/components/Icons';

interface ServicePackage {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
}

interface Service {
  id: string;
  name: string;
  packages: ServicePackage[];
  note?: string;
}

const services: Service[] = [
  {
    id: 'modelling',
    name: 'Modelling Photoshoot',
    packages: [
      {
        id: 'modelling-1',
        name: 'Package 1: Based on your themes',
        price: 15000,
        originalPrice: 25000,
      },
      {
        id: 'modelling-2',
        name: 'Package 2: Price not fixed, depends on requirements',
        price: 30000,
        originalPrice: 60000,
      },
    ],
  },
  {
    id: 'baby',
    name: 'Baby Shoots',
    packages: [
      {
        id: 'baby-1',
        name: 'Price negotiable based on requirements',
        price: 20000,
        originalPrice: 50000,
      },
    ],
  },
  {
    id: 'pre-wedding',
    name: 'Pre-Wedding',
    packages: [
      {
        id: 'pre-wedding-1',
        name: 'Package 1: Based on requirements',
        price: 250000,
        originalPrice: 500000,
      },
      {
        id: 'pre-wedding-2',
        name: 'Package 2: Wedding package based on needs',
        price: 150000,
        originalPrice: 300000,
      },
    ],
  },
  {
    id: 'wedding-album',
    name: 'Wedding Album',
    packages: [
      {
        id: 'wedding-album-1',
        name: 'Full wedding package',
        price: 150000,
        originalPrice: 200000,
      },
    ],
  },
];

export default function ServiceCustomizer() {
  const [selectedPackages, setSelectedPackages] = useState<Set<string>>(new Set());

  const togglePackage = (packageId: string) => {
    const newSelected = new Set(selectedPackages);
    if (newSelected.has(packageId)) {
      newSelected.delete(packageId);
    } else {
      newSelected.add(packageId);
    }
    setSelectedPackages(newSelected);
  };

  const calculateTotal = () => {
    let total = 0;
    let originalTotal = 0;
    
    services.forEach((service) => {
      service.packages.forEach((pkg) => {
        if (selectedPackages.has(pkg.id)) {
          total += pkg.price;
          originalTotal += pkg.originalPrice;
        }
      });
    });

    return { total, originalTotal, savings: originalTotal - total };
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleSubmit = () => {
    const { total, originalTotal, savings } = calculateTotal();
    
    let message = 'Hello! I\'m interested in the following photography services:\n\n';
    
    services.forEach((service) => {
      const selectedServicePackages = service.packages.filter((pkg) =>
        selectedPackages.has(pkg.id)
      );
      
      if (selectedServicePackages.length > 0) {
        message += `*${service.name}*\n`;
        selectedServicePackages.forEach((pkg) => {
          message += `• ${pkg.name}\n`;
          message += `  Price: ${formatPrice(pkg.price)} (Original: ${formatPrice(pkg.originalPrice)})\n`;
        });
        message += '\n';
      }
    });

    message += `*Total Price:* ${formatPrice(total)}\n`;
    message += `*Original Price:* ${formatPrice(originalTotal)}\n`;
    message += `*You Save:* ${formatPrice(savings)}\n\n`;
    message += 'Please let me know the next steps.';

    // WhatsApp number: +91 99635 62764
    const whatsappNumber = '919963562764';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  const { total, originalTotal, savings } = calculateTotal();
  const hasSelection = selectedPackages.size > 0;

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-gray-100 fade-in-section opacity-0">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Customize Your Services
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Select the services you need and see the price update in real-time
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Services Selection */}
          <div className="lg:col-span-2 space-y-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {service.name}
                </h3>
                <div className="space-y-3">
                  {service.packages.map((pkg) => {
                    const isSelected = selectedPackages.has(pkg.id);
                    return (
                      <div
                        key={pkg.id}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                          isSelected
                            ? 'border-gray-900 bg-gray-50'
                            : 'border-gray-200 hover:border-gray-400'
                        }`}
                        onClick={() => togglePackage(pkg.id)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <div
                                className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                                  isSelected
                                    ? 'bg-gray-900 border-gray-900'
                                    : 'border-gray-300'
                                }`}
                              >
                                {isSelected && (
                                  <Check className="w-3 h-3 text-white" />
                                )}
                              </div>
                              <p className="font-medium text-gray-900">{pkg.name}</p>
                            </div>
                            <div className="ml-8 flex items-center gap-3">
                              <span className="text-xl font-bold text-gray-900">
                                {formatPrice(pkg.price)}
                              </span>
                              <span className="text-sm text-gray-500 line-through">
                                {formatPrice(pkg.originalPrice)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Price Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Price Summary</h3>
              
              {!hasSelection ? (
                <div className="text-center py-8 text-gray-500">
                  <p>Select services to see pricing</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Original Price:</span>
                      <span className="text-gray-500 line-through">
                        {formatPrice(originalTotal)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">You Save:</span>
                      <span className="text-green-600 font-semibold">
                        {formatPrice(savings)}
                      </span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-gray-900">Total:</span>
                        <span className="text-2xl font-bold text-gray-900">
                          {formatPrice(total)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.381 1.262.621 1.694.795.683.276 1.307.237 1.797.144.574-.113 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Continue on WhatsApp
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

