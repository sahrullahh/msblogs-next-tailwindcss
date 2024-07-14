const timeAgo = (date: string) => {
  const now: any = new Date();
  const past: any = new Date(date);
  const secondsAgo = Math.floor((now - past) / 1000);

  let interval = Math.floor(secondsAgo / 31536000);
  if (interval >= 1) {
    return interval + " year" + (interval === 1 ? "" : "s") + " ago";
  }

  interval = Math.floor(secondsAgo / 2592000);
  if (interval >= 1) {
    return interval + " month" + (interval === 1 ? "" : "s") + " ago";
  }

  interval = Math.floor(secondsAgo / 86400);
  if (interval >= 1) {
    return interval + " day" + (interval === 1 ? "" : "s") + " ago";
  }

  interval = Math.floor(secondsAgo / 3600);
  if (interval >= 1) {
    return interval + " hour" + (interval === 1 ? "" : "s") + " ago";
  }

  interval = Math.floor(secondsAgo / 60);
  if (interval >= 1) {
    return interval + " minute" + (interval === 1 ? "" : "s") + " ago";
  }

  return secondsAgo + " second" + (secondsAgo === 1 ? "" : "s") + " ago";
};

export default timeAgo;
