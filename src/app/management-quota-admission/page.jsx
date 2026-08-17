export default function ManagementQuotaAdmissionPage() {
  return (
    <div className="min-h-screen bg-slate-100 pt-28 md:pt-32 pb-8 md:pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
            Admissions 2026
          </p>
          <h1 className="mt-2 text-2xl md:text-3xl font-bold text-slate-800">
            Management Quota Admission
          </h1>
        </div>

        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
          <img
            src="/images/RPCP%20MQ%20Adv.webp"
            alt="Management Quota Admission 2026 Advertisement"
            className="block h-auto w-full max-h-[80vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
