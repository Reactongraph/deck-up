export default function FeatureHover() {
  return (
    <div className="flex flex-col  rounded-lg shadow-md md:flex-row justify-center bg-white items-stretch gap-4 p-4">
      <div className="flex-1 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Pricing & Plans
        </h2>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>Individual</li>
          <li>Small teams</li>
          <li>Enterprise</li>
        </ul>
      </div>

      <div className="flex-1 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Subscription Management
        </h2>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>Manage users</li>
          <li>Billing information</li>
          <li>Renew service</li>
        </ul>
      </div>

      <div className="flex-1 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">FAQs</h2>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>How to create your first project?</li>
          <li>How to invite team members?</li>
          <li>How to upgrade your plan?</li>
        </ul>
      </div>
    </div>
  );
}
