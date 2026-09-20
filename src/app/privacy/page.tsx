import { Shield, FileText, Key, Eye, HelpCircle } from "lucide-react";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-12 px-6">
      <div className="space-y-6 max-w-4xl mx-auto">
        {/* Header */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg border border-emerald-100">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Privacy Policy</h1>
              <p className="text-sm text-slate-500">Effective Date: June 4, 2026</p>
            </div>
          </div>
          <p className="text-slate-600 mt-2">
            At R.N. Pandey Insurance Centre, we value your privacy and are committed to protecting the personal data of our customers, agents, and administrators. This policy outlines how our CRM platform collects, uses, and safeguards information.
          </p>
        </div>

        {/* Data We Collect & How We Use Data */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Data We Collect</h3>
                <p className="text-sm text-slate-500">Types of information stored in the CRM</p>
              </div>
            </div>
            <div className="space-y-2.5 text-sm text-slate-600">
              <p>To provide Insurance operations and WhatsApp automation, we collect and store:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Customer details (Name, Contact information, DOB).</li>
                <li>Policy details (Vehicle number, Policy numbers, Premium values, Expiry dates).</li>
                <li>WhatsApp message history and automation log streams.</li>
                <li>User authentication credentials and action logs.</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">How We Use Data</h3>
                <p className="text-sm text-slate-500">Primary purposes of data processing</p>
              </div>
            </div>
            <div className="space-y-2.5 text-sm text-slate-600">
              <p>Information within the CRM is processed specifically to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Manage customer profiles and historical insurance documents.</li>
                <li>Trigger automated renewal reminders (30, 15, and 7-day intervals).</li>
                <li>Train local AI Agents to assist with user inquiries.</li>
                <li>Audit administrative activity and prevent unauthorized access.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 3: Security & Data Privacy Controls */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">Security & Data Privacy Controls</h3>
              <p className="text-sm text-slate-500">How we safeguard sensitive Insurance information</p>
            </div>
          </div>
          <div className="space-y-3 text-sm text-slate-600">
            <p>Our Infrastructure incorporates modern standard measures to secure customer portfolios:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <h4 className="font-semibold text-slate-900 mb-1">Local AI Reasoning</h4>
                <p className="text-xs text-slate-500">By default, our CRM routes AI queries through local models (LM Studio) ensuring no customer data leaks to third-party public models.</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <h4 className="font-semibold text-slate-900 mb-1">Secure Integrations</h4>
                <p className="text-xs text-slate-500">API keys (Meta Cloud APIs, Webhooks) are encrypted at rest and never exposed on clients or client-side logs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Contact & Support */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-slate-100 text-slate-600 rounded-lg">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">Contact & Support</h3>
              <p className="text-sm text-slate-500">For questions regarding this policy</p>
            </div>
          </div>
          <div className="text-sm text-slate-600">
            <p>
              If you have questions about this Privacy Policy or require assistance with data removal, please contact the administrator at{" "}
              <a href="mailto:admin@rnpandeyinsurance.com" className="text-emerald-600 hover:underline font-medium">
                admin@rnpandeyinsurance.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
