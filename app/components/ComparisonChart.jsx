"use client"
import React, { useState } from 'react';
import { FiCheck, FiX, FiAlertCircle, FiInfo, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ComparisonChart = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  // Comparison data with detailed explanations
  const features = [
    { 
      name: 'Harga Terjangkau', 
      description: 'Biaya yang kompetitif dengan nilai terbaik',
      freelancer: { value: true, note: 'Tergantung kualifikasi' }, 
      inHouse: { value: false, note: 'Biaya tetap+gaji' }, 
      agency: { value: false, note: 'Biaya premium' }, 
      sribu: { value: true, note: 'Harga paket jelas' } 
    },
    { 
      name: 'Pilihan Desainer', 
      description: 'Akses ke berbagai talenta kreatif',
      freelancer: { value: false, note: '1 desainer' }, 
      inHouse: { value: false, note: 'Tim terbatas' }, 
      agency: { value: true, note: 'Tim agency' }, 
      sribu: { value: true, note: '100+ desainer' } 
    },
    { 
      name: 'Kecepatan', 
      description: 'Waktu penyelesaian proyek',
      freelancer: { value: false, note: '2-7 hari' }, 
      inHouse: { value: true, note: '1-3 hari' }, 
      agency: { value: false, note: '3-10 hari' }, 
      sribu: { value: true, note: '1-3 hari' } 
    },
    { 
      name: 'Revisi', 
      description: 'Fleksibilitas perubahan desain',
      freelancer: { value: false, note: 'Terbatas' }, 
      inHouse: { value: true, note: 'Unlimited' }, 
      agency: { value: true, note: 'Termasuk' }, 
      sribu: { value: true, note: 'Unlimited' } 
    },
    { 
      name: 'Garansi', 
      description: 'Jaminan kualitas hasil',
      freelancer: { value: false, note: 'Tidak ada' }, 
      inHouse: { value: true, note: 'Full' }, 
      agency: { value: false, note: 'Terbatas' }, 
      sribu: { value: true, note: '100% puas' } 
    },
    { 
      name: 'Hak Cipta', 
      description: 'Kepemilikan penuh hasil akhir',
      freelancer: { value: true, note: 'Setelah lunas' }, 
      inHouse: { value: true, note: 'Perusahaan' }, 
      agency: { value: true, note: 'Klien' }, 
      sribu: { value: true, note: 'Transfer penuh' } 
    },
    { 
      name: 'Support', 
      description: 'Bantuan profesional',
      freelancer: { value: false, note: 'Minimal' }, 
      inHouse: { value: true, note: 'Langsung' }, 
      agency: { value: true, note: 'Dedicated' }, 
      sribu: { value: true, note: '24/7' } 
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      id="comparison"
      className="py-16 md:py-24 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 text-green-600 text-sm font-medium mb-4">
            <FiAlertCircle className="mr-2" />
            Perbandingan Lengkap
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Solusi Terbaik untuk Kebutuhan Desain Anda
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bandingkan freelancer, in-house, agency, dan platform kami secara detail
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div variants={itemVariants} className="overflow-x-auto pb-2">
          <div className="inline-block min-w-full align-middle rounded-xl border border-gray-200 overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">
                    <span className="block mb-1">Fitur</span>
                    <div className="text-xs font-normal text-gray-400">Deskripsi layanan</div>
                  </th>
                  <th scope="col" className="px-4 py-5 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Freelancer
                  </th>
                  <th scope="col" className="px-4 py-5 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    In-House
                  </th>
                  <th scope="col" className="px-4 py-5 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Agency
                  </th>
                  <th scope="col" className="px-4 py-5 text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-green-50 border-l-2 border-r-2 border-green-100">
                    <span className="text-green-600">Sribu</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {features.map((feature, index) => (
                  <motion.tr 
                    key={index}
                    variants={itemVariants}
                    className={`hover:bg-gray-50 transition-colors ${hoveredFeature === index ? 'bg-gray-50' : ''}`}
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{feature.name}</div>
                      {(hoveredFeature === index) && (
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-xs text-gray-500 mt-1"
                        >
                          {feature.description}
                        </motion.div>
                      )}
                    </td>
                    <td className="px-4 py-5 whitespace-nowrap text-center">
                      <div className="flex flex-col items-center">
                        {feature.freelancer.value ? (
                          <FiCheck className="h-5 w-5 text-green-500" />
                        ) : (
                          <FiX className="h-5 w-5 text-red-500" />
                        )}
                        <span className="text-xs text-gray-500 mt-1">{feature.freelancer.note}</span>
                      </div>
                    </td>
                    <td className="px-4 py-5 whitespace-nowrap text-center">
                      <div className="flex flex-col items-center">
                        {feature.inHouse.value ? (
                          <FiCheck className="h-5 w-5 text-green-500" />
                        ) : (
                          <FiX className="h-5 w-5 text-red-500" />
                        )}
                        <span className="text-xs text-gray-500 mt-1">{feature.inHouse.note}</span>
                      </div>
                    </td>
                    <td className="px-4 py-5 whitespace-nowrap text-center">
                      <div className="flex flex-col items-center">
                        {feature.agency.value ? (
                          <FiCheck className="h-5 w-5 text-green-500" />
                        ) : (
                          <FiX className="h-5 w-5 text-red-500" />
                        )}
                        <span className="text-xs text-gray-500 mt-1">{feature.agency.note}</span>
                      </div>
                    </td>
                    <td className="px-4 py-5 whitespace-nowrap text-center bg-green-50 border-l-2 border-r-2 border-green-100">
                      <div className="flex flex-col items-center">
                        {feature.sribu.value ? (
                          <div className="flex items-center">
                            <FiCheck className="h-5 w-5 text-green-600" />
                            <span className="ml-1 text-green-600 font-medium"></span>
                          </div>
                        ) : (
                          <FiX className="h-5 w-5 text-red-500" />
                        )}
                        <span className="text-xs text-gray-600 mt-1 font-medium">{feature.sribu.note}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div variants={itemVariants} className="mt-8 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
            <div className="flex items-center text-sm text-gray-500">
              <FiInfo className="mr-2 text-gray-400" />
              Data berdasarkan pengalaman klien dan riset pasar
            </div>
            <div className="hidden md:block h-4 w-px bg-gray-200"></div>
            <div className="text-sm text-gray-500">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors shadow-sm"
          >
            Lihat Paket Layanan
            <FiArrowRight className="ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ComparisonChart;