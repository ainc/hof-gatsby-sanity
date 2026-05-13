/**
 * Normalize stored YouTube URLs for iframe playback in an HTTPS app.
 * Upgrades http → https (avoids mixed-content black screens) and supports
 * watch, /embed/, youtu.be, Shorts, and m.youtube.com — same rules as founders series.
 *
 * @param {string} url
 * @returns {string} https embed URL with autoplay, mute, rel for modal players
 */
export function toYoutubeModalEmbedUrl(url) {
  if (!url || typeof url !== "string") return "";

  try {
    const parsed = new URL(url.trim());

    const isYouTube =
      parsed.hostname === "youtube.com" ||
      parsed.hostname === "www.youtube.com" ||
      parsed.hostname === "m.youtube.com" ||
      parsed.hostname === "music.youtube.com" ||
      parsed.hostname === "youtu.be" ||
      parsed.hostname === "youtube-nocookie.com" ||
      parsed.hostname === "www.youtube-nocookie.com";

    if (!isYouTube) {
      return `${url}${url.includes("?") ? "&" : "?"}autoplay=1&mute=1&rel=0`;
    }

    parsed.protocol = "https:";

    if (parsed.hostname === "m.youtube.com") {
      parsed.hostname = "www.youtube.com";
    } else if (parsed.hostname === "youtube.com") {
      parsed.hostname = "www.youtube.com";
    }

    const appendPlayback = (/** @type {URL} */ u) => {
      u.searchParams.set("autoplay", "1");
      u.searchParams.set("mute", "1");
      u.searchParams.set("rel", "0");
      return u.toString();
    };

    if (parsed.pathname.startsWith("/embed/")) {
      parsed.searchParams.set("autoplay", "1");
      parsed.searchParams.set("mute", "1");
      parsed.searchParams.set("rel", "0");
      return parsed.toString();
    }

    if (parsed.pathname === "/watch" && parsed.searchParams.has("v")) {
      const videoId = parsed.searchParams.get("v");
      const embedUrl = new URL(`https://www.youtube.com/embed/${videoId}`);

      parsed.searchParams.forEach((val, key) => {
        if (key !== "v") embedUrl.searchParams.set(key, val);
      });

      return appendPlayback(embedUrl);
    }

    if (parsed.hostname === "youtu.be") {
      const videoId = parsed.pathname.replace(/^\//, "").split("?")[0];
      const embedUrl = new URL(`https://www.youtube.com/embed/${videoId}`);

      parsed.searchParams.forEach((val, key) => {
        embedUrl.searchParams.set(key, val);
      });

      return appendPlayback(embedUrl);
    }

    if (parsed.pathname.startsWith("/shorts/")) {
      const videoId = parsed.pathname.split("/shorts/")[1]?.split("/")[0];
      if (!videoId) {
        parsed.searchParams.set("autoplay", "1");
        parsed.searchParams.set("mute", "1");
        parsed.searchParams.set("rel", "0");
        return parsed.toString();
      }
      const embedUrl = new URL(`https://www.youtube.com/embed/${videoId}`);
      return appendPlayback(embedUrl);
    }

    parsed.searchParams.set("autoplay", "1");
    parsed.searchParams.set("mute", "1");
    parsed.searchParams.set("rel", "0");
    return parsed.toString();
  } catch {
    return `${url}${url.includes("?") ? "&" : "?"}autoplay=1&mute=1&rel=0`;
  }
}
