"use client";

import { useEffect, useMemo, useState } from "react";
import { Calendar, ChevronDown, Expand, Filter, X } from "lucide-react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import eventPosters from "@/data/event-posters.json";

const allMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getEventNumber(image) {
  const match = image.match(/(\d+)/);
  return match ? `Event ${match[1]}` : "Event";
}

function EventPoster({ event }) {
  const [isOpen, setIsOpen] = useState(false);
  const eventNumber = getEventNumber(event.image);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group block w-full overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
          <img
            src={event.image}
            alt={eventNumber}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/35" />
          <div className="absolute left-4 top-4 rounded-full bg-[#202A44]/90 px-3 py-1 text-xs font-bold tracking-wide text-white shadow-lg backdrop-blur-sm">
            {eventNumber}
          </div>
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-center p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-[#202A44] shadow-xl">
              <Expand className="h-3.5 w-3.5" />
              Click for full view
            </div>
          </div>
        </div>
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          showCloseButton={false}
          className="max-w-[95vw] border-0 bg-transparent p-0 shadow-none"
        >
          <DialogTitle className="sr-only">{eventNumber}</DialogTitle>
          <div className="relative mx-auto flex max-h-[92vh] max-w-[95vw] items-center justify-center p-4">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-6 top-6 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[#202A44] shadow-lg transition hover:scale-105 hover:bg-white"
              aria-label="Close full view"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative max-h-[92vh] overflow-hidden rounded-3xl bg-black shadow-2xl">
              <img
                src={event.image}
                alt={eventNumber}
                className="max-h-[92vh] w-full max-w-[95vw] object-contain"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default function AcademicEnrichment() {
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState("all");

  const yearOptions = useMemo(() => {
    return [
      ...new Set(eventPosters.map((event) => String(event.year))).values(),
    ].sort((left, right) => Number(right) - Number(left));
  }, []);

  const availableMonths = useMemo(() => {
    return allMonths.filter((month) => {
      if (selectedYear === "all") {
        return eventPosters.some((event) => event.month === month);
      }

      return eventPosters.some(
        (event) => String(event.year) === selectedYear && event.month === month,
      );
    });
  }, [selectedYear]);

  useEffect(() => {
    if (selectedMonth !== "all" && !availableMonths.includes(selectedMonth)) {
      setSelectedMonth("all");
    }
  }, [availableMonths, selectedMonth]);

  const filteredEvents = useMemo(() => {
    return eventPosters.filter((event) => {
      const matchesYear =
        selectedYear === "all" || String(event.year) === selectedYear;
      const matchesMonth =
        selectedMonth === "all" || event.month === selectedMonth;
      return matchesYear && matchesMonth;
    });
  }, [selectedMonth, selectedYear]);

  const selectedMonthLabel =
    selectedMonth === "all" ? "All Months" : selectedMonth;
  const selectedYearLabel = selectedYear === "all" ? "All Years" : selectedYear;
  const filterSummary =
    selectedMonth === "all" && selectedYear === "all"
      ? "All Events"
      : `${selectedMonthLabel} ${selectedYearLabel}`.trim();

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="bg-[#202A44] pt-36 pb-12 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-3xl font-extrabold leading-tight lg:text-5xl">
            Academic Enrichment
          </h1>
        </div>
      </section>

      <main className="container mx-auto space-y-8 px-6 py-14 lg:py-16">
        <section className="space-y-5 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm lg:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <button
              type="button"
              onClick={() => {
                setSelectedYear("all");
                setSelectedMonth("all");
              }}
              className={`inline-flex w-fit items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
                selectedYear === "all" && selectedMonth === "all"
                  ? "bg-[#2457e5] text-white shadow-lg shadow-blue-200"
                  : "border border-slate-200 bg-white text-[#202A44] hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <Calendar className="h-4 w-4" />
              All Events
            </button>

            <div className="relative w-full min-w-[150px] max-w-[180px] lg:ml-auto">
              <select
                value={selectedYear}
                onChange={(event) => setSelectedYear(event.target.value)}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-10 text-sm font-semibold text-[#202A44] outline-none transition focus:border-[#2457e5]"
              >
                <option value="all">All Years</option>
                {yearOptions.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            </div>
          </div>

          <div className="overflow-x-auto pb-1">
            <div className="flex min-w-max gap-2 rounded-2xl bg-slate-50 p-2">
              <button
                type="button"
                onClick={() => setSelectedMonth("all")}
                className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                  selectedMonth === "all"
                    ? "bg-white text-[#2457e5] shadow-sm ring-1 ring-blue-100"
                    : "text-slate-700 hover:bg-white hover:shadow-sm"
                }`}
              >
                All Months
              </button>

              {allMonths.map((month) => {
                const isActive = selectedMonth === month;
                const isAvailable =
                  availableMonths.includes(month) || selectedYear === "all";

                return (
                  <button
                    key={month}
                    type="button"
                    onClick={() => setSelectedMonth(month)}
                    disabled={!isAvailable}
                    className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                      isActive
                        ? "bg-white text-[#2457e5] shadow-sm ring-1 ring-blue-100"
                        : isAvailable
                          ? "text-slate-700 hover:bg-white hover:shadow-sm"
                          : "cursor-not-allowed text-slate-300"
                    }`}
                  >
                    {month}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
            <Filter className="h-4 w-4 text-slate-500" />
            <span className="font-medium text-slate-600">Filtered by:</span>
            <span className="rounded-full bg-[#2457e5]/10 px-3 py-1 font-semibold text-[#2457e5]">
              {filterSummary}
            </span>
            <span className="text-slate-500">
              ({filteredEvents.length} event
              {filteredEvents.length === 1 ? "" : "s"})
            </span>
          </div>
        </section>

        <section className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#202A44] text-white shadow-lg shadow-[#202A44]/20">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-[#202A44]">
                  Event Posters
                </h2>
                <p className="text-sm text-slate-500">
                  Showing {filteredEvents.length} event
                  {filteredEvents.length === 1 ? "" : "s"}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredEvents.map((event) => (
              <EventPoster key={event.image} event={event} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
