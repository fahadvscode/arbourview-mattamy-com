import { MAP_IFRAME_TITLE, MAPS_EMBED_SRC } from "@/lib/content";

export function LocationMap() {
  return (
    <div className="overflow-hidden rounded-sm border border-border">
      <iframe
        title={MAP_IFRAME_TITLE}
        src={MAPS_EMBED_SRC}
        className="h-[360px] w-full md:h-[480px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
