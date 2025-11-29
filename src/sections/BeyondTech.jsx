import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import Tag from "../components/Tag";
import { beyondTechText, beyondTechTags, beyondTechGalleries, personalInfo } from "../data/content";

// Modal slideshow component
function MediaModal({ galleryKey, onClose }) {
  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);

  // Reset index when gallery changes
  useEffect(() => {
    setIndex(0);
  }, [galleryKey]);

  // Cleanup video when closing or switching
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.src = "";
        videoRef.current.load();
      }
    };
  }, [galleryKey, index]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!galleryKey) return null;

  const gallery = beyondTechGalleries[galleryKey];

  if (!gallery) return null;
  const items = gallery.items || [];

  const hasMedia = items.length > 0;
  const current = hasMedia ? items[index] : null;

  const goPrev = () => {
    if (!hasMedia) return;
    // Pause current video before switching
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goNext = () => {
    if (!hasMedia) return;
    // Pause current video before switching
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIndex((prev) => (prev + 1) % items.length);
  };

  const handleClose = () => {
    // Pause video before closing
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.src = "";
    }
    onClose();
  };

  const handleBgClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
        onClick={handleBgClick}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="w-full max-w-xl rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
            <h3 className="text-sm font-semibold text-slate-100">
              {gallery.title}
            </h3>
            <button
              onClick={handleClose}
              className="text-slate-400 hover:text-slate-100 text-xs px-2 py-1 rounded-md hover:bg-slate-800"
            >
              ✕ Close
            </button>
          </div>

          {/* Special case: entrepreneurship – no media, just idea CTA */}
          {galleryKey === "entrepreneurship" ? (
            <div className="p-4 space-y-3 text-sm text-slate-200">
              <p>
                I&apos;m always looking for real business ideas and collaboration
                opportunities. If you have a startup idea, side hustle concept, or
                something you&apos;d like to build, share it with me.
              </p>
              <p>
                Tell me briefly:
                <br />• What the business is about
                <br />• Who it helps
                <br />• What stage you&apos;re at (idea, early, running)
              </p>
              <a
                href={`mailto:${personalInfo.email}?subject=Business%20Idea%20for%20Georgy&body=Hi%20Georgy,%0D%0A%0D%0AMy%20business%20idea%20is...`}
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-sm font-medium text-slate-950 transition-colors"
              >
                Share your idea via email
              </a>
            </div>
          ) : (
            <div className="p-4">
              {hasMedia ? (
                <>
                  <div className="relative rounded-xl overflow-hidden bg-black flex items-center justify-center aspect-video">
                    {current.type === "image" && (
                      <img
                        src={current.src}
                        alt={gallery.title}
                        className="max-h-full max-w-full object-contain"
                      />
                    )}
                    {current.type === "video" && (
                      <video
                        ref={videoRef}
                        key={current.src}
                        controls
                        preload="metadata"
                        className="max-h-full max-w-full"
                      >
                        <source src={current.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                    {items.length > 1 && (
                      <>
                        <button
                          onClick={goPrev}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full w-8 h-8 flex items-center justify-center text-lg text-slate-100"
                        >
                          ‹
                        </button>
                        <button
                          onClick={goNext}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full w-8 h-8 flex items-center justify-center text-lg text-slate-100"
                        >
                          ›
                        </button>
                      </>
                    )}
                  </div>

                  {items.length > 1 && (
                    <div className="flex justify-center gap-1.5 mt-3">
                      {items.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            if (videoRef.current) videoRef.current.pause();
                            setIndex(i);
                          }}
                          className={`h-2 w-6 rounded-full transition-colors ${
                            i === index ? "bg-sky-500" : "bg-slate-600 hover:bg-slate-500"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <p className="text-sm text-slate-300">
                  No media added yet. You can add images/videos for this section
                  later by editing <code>beyondTechGalleries</code>.
                </p>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default function BeyondTech() {
  const [activeGallery, setActiveGallery] = useState(null);

  const openGallery = (key) => setActiveGallery(key);
  const closeGallery = () => setActiveGallery(null);

  return (
    <>
      <SectionWrapper
        id="beyond-tech"
        title="Beyond Tech"
        subtitle="Life outside of code and systems"
      >
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 space-y-4"
          >
            {beyondTechText.map((paragraph, i) => (
              <p key={i} className="text-slate-400 leading-relaxed">
                {paragraph}
              </p>
            ))}
            <p className="text-xs text-slate-500 mt-2">
              Click any interest below to see a small gallery of photos/videos from that part of my life.
            </p>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl border border-slate-800/50 bg-slate-900/40 backdrop-blur-sm p-6">
              <h3 className="font-semibold text-slate-100 mb-4">Interests & Values</h3>
              <div className="flex flex-wrap gap-3">
                {beyondTechTags.map((tag, index) => (
                  <Tag 
                    key={tag.label} 
                    emoji={tag.emoji} 
                    label={tag.label} 
                    index={index}
                    onClick={() => openGallery(tag.galleryKey)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {activeGallery && (
        <MediaModal galleryKey={activeGallery} onClose={closeGallery} />
      )}
    </>
  );
}
