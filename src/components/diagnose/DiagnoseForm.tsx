import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { Upload, Check, Leaf, AlertTriangle, Search, Loader } from 'lucide-react';
import { plantIssues } from '../../data/plantsData';

const DiagnoseForm: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDiagnosing, setIsDiagnosing] = useState(false);
  const [diagnosisResult, setDiagnosisResult] = useState<typeof plantIssues[0] | null>(null);
  const { addPoints, addBadge } = useUser();

  const symptomOptions = [
    'Yellow leaves',
    'Brown spots',
    'Wilting',
    'Drooping',
    'Curling leaves',
    'White powder',
    'Sticky residue',
    'Black spots',
    'Stunted growth',
    'Leaf drop',
    'Yellowing edges',
    'Holes in leaves',
    'Mushy stems',
  ];

  const filteredSymptoms = symptomOptions.filter(
    (symptom) => searchQuery === '' || symptom.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setDiagnosisResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleSymptom = (symptom: string) => {
    if (symptoms.includes(symptom)) {
      setSymptoms(symptoms.filter((s) => s !== symptom));
    } else {
      setSymptoms([...symptoms, symptom]);
    }
  };

  const handleDiagnose = () => {
    if (symptoms.length === 0 && !selectedImage) return;
    
    setIsDiagnosing(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Simulate finding an issue based on symptoms
      const issueIndex = Math.floor(Math.random() * plantIssues.length);
      setDiagnosisResult(plantIssues[issueIndex]);
      
      setIsDiagnosing(false);
      addPoints(50);
      addBadge('Plant Doctor');
    }, 2500);
  };

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Plant Diagnosis</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Upload a photo and describe symptoms to diagnose plant problems and get solutions.
        </p>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        <div className="mb-6">
          <h2 className="mb-4 flex items-center text-xl font-semibold text-gray-900 dark:text-white">
            <AlertTriangle size={20} className="mr-2 text-warning" />
            What's wrong with your plant?
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Upload a photo of the affected area
              </label>
              <div className="mt-1 flex items-center">
                <label className="btn btn-secondary flex cursor-pointer">
                  <Upload size={18} className="mr-2" />
                  Choose Image
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              
              {selectedImage && (
                <div className="mt-4">
                  <div className="relative overflow-hidden rounded-md">
                    <img 
                      src={selectedImage} 
                      alt="Plant issue" 
                      className="h-40 w-full object-cover" 
                    />
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Select symptoms (choose all that apply)
              </label>
              <div className="relative">
                <div className="flex items-center rounded-md border border-gray-300 dark:border-gray-600">
                  <div className="pointer-events-none pl-3">
                    <Search size={16} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="w-full border-0 bg-transparent py-2 pl-2 pr-3 text-sm focus:outline-none focus:ring-0 dark:text-white"
                    placeholder="Search symptoms..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="mt-2 h-40 overflow-y-auto rounded-md border border-gray-200 p-2 dark:border-gray-700">
                {filteredSymptoms.length > 0 ? (
                  filteredSymptoms.map((symptom) => (
                    <div
                      key={symptom}
                      className="mb-1 flex items-center"
                    >
                      <input
                        type="checkbox"
                        id={`symptom-${symptom}`}
                        checked={symptoms.includes(symptom)}
                        onChange={() => toggleSymptom(symptom)}
                        className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700"
                      />
                      <label
                        htmlFor={`symptom-${symptom}`}
                        className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                      >
                        {symptom}
                      </label>
                    </div>
                  ))
                ) : (
                  <p className="py-2 text-center text-sm text-gray-500 dark:text-gray-400">
                    No symptoms match your search
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={handleDiagnose}
            disabled={isDiagnosing || (symptoms.length === 0 && !selectedImage)}
            className={`btn btn-primary ${
              isDiagnosing || (symptoms.length === 0 && !selectedImage)
                ? 'cursor-not-allowed opacity-50'
                : ''
            }`}
          >
            {isDiagnosing ? (
              <>
                <Loader size={18} className="mr-2 animate-spin" />
                Diagnosing...
              </>
            ) : (
              <>
                <Leaf size={18} className="mr-2" />
                Diagnose Plant
              </>
            )}
          </button>
        </div>
        
        {isDiagnosing && (
          <div className="mt-6 flex flex-col items-center py-4">
            <Loader size={32} className="animate-spin text-primary-600 dark:text-primary-400" />
            <p className="mt-4 text-gray-600 dark:text-gray-400">Analyzing plant symptoms...</p>
          </div>
        )}
        
        {diagnosisResult && (
          <div className="mt-8">
            <div className="mb-4 rounded-t-lg bg-primary-50 p-4 dark:bg-primary-900/20">
              <div className="flex items-center">
                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-800 dark:text-primary-300">
                  <Leaf size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {diagnosisResult.name}
                  </h3>
                </div>
              </div>
            </div>
            
            <div className="rounded-b-lg border border-gray-200 p-4 dark:border-gray-700">
              <div className="mb-4">
                <p className="text-gray-700 dark:text-gray-300">{diagnosisResult.description}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">Common Symptoms:</h4>
                <ul className="list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400">
                  {diagnosisResult.symptoms.map((symptom, index) => (
                    <li key={index}>{symptom}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">Possible Causes:</h4>
                <ul className="list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400">
                  {diagnosisResult.causes.map((cause, index) => (
                    <li key={index}>{cause}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">Recommended Solutions:</h4>
                <ul className="list-inside list-disc space-y-1 text-gray-600 dark:text-gray-400">
                  {diagnosisResult.solutions.map((solution, index) => (
                    <li key={index}>{solution}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-4 rounded-md bg-green-50 p-3 text-sm text-green-800 dark:bg-green-900/20 dark:text-green-300">
              <Check size={16} className="mr-2 inline" />
              Diagnosis complete! You earned 50 XP.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiagnoseForm;