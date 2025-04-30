export function sanitizeActivities(activities) {
    return activities.map((activity) => ({
      ...activity,
      category: Array.isArray(activity.category) ? activity.category : [],
      benefits: Array.isArray(activity.benefits) ? activity.benefits : [],
      materials: Array.isArray(activity.materials) ? activity.materials : [],
    }));
  }
  