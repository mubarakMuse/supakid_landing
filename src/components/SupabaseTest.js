import React, { useState } from 'react';
import { supabase, insertLead, getLeads } from '../lib/supabase';

const SupabaseTest = () => {
  const [testResult, setTestResult] = useState('');
  const [leads, setLeads] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const testConnection = async () => {
    setIsLoading(true);
    setTestResult('Testing connection...');
    
    try {
      // Test basic connection
      const { data, error } = await supabase
        .from('leads')
        .select('count')
        .limit(1);
      
      if (error) {
        setTestResult(`❌ Connection failed: ${error.message}`);
      } else {
        setTestResult('✅ Connection successful! Supabase is working.');
      }
    } catch (err) {
      setTestResult(`❌ Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const testInsert = async () => {
    setIsLoading(true);
    setTestResult('Testing insert...');
    
    try {
      const testData = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '123-456-7890',
        numberOfKids: '2'
      };
      
      const result = await insertLead(testData);
      
      if (result.success) {
        setTestResult('✅ Test lead inserted successfully!');
      } else {
        setTestResult(`❌ Insert failed: ${result.error}`);
      }
    } catch (err) {
      setTestResult(`❌ Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchLeads = async () => {
    setIsLoading(true);
    setTestResult('Fetching leads...');
    
    try {
      const result = await getLeads();
      
      if (result.success) {
        setLeads(result.data);
        setTestResult(`✅ Found ${result.data.length} leads`);
      } else {
        setTestResult(`❌ Fetch failed: ${result.error}`);
      }
    } catch (err) {
      setTestResult(`❌ Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-bold mb-4">Supabase Integration Test</h3>
      
      <div className="space-y-4">
        <div className="flex space-x-2">
          <button
            onClick={testConnection}
            disabled={isLoading}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
          >
            Test Connection
          </button>
          
          <button
            onClick={testInsert}
            disabled={isLoading}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
          >
            Test Insert
          </button>
          
          <button
            onClick={fetchLeads}
            disabled={isLoading}
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 disabled:opacity-50"
          >
            Fetch Leads
          </button>
        </div>
        
        {testResult && (
          <div className="p-3 bg-white rounded border">
            <pre className="text-sm">{testResult}</pre>
          </div>
        )}
        
        {leads.length > 0 && (
          <div className="p-3 bg-white rounded border">
            <h4 className="font-bold mb-2">Leads ({leads.length}):</h4>
            <div className="max-h-40 overflow-y-auto">
              {leads.map((lead, index) => (
                <div key={lead.id || index} className="text-xs border-b py-1">
                  <strong>{lead.name}</strong> - {lead.email} - {lead.phone} - {lead.number_of_kids} kids
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupabaseTest;
