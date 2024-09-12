function truncateString(str: string | undefined): string | undefined {
    if (str == undefined) {
      return undefined;
    }
    if (str.length <= 9) {
      return str;
    }
  
    const prefix = str.slice(0, 5);
    const suffix = str.slice(-4);
  
    return `${prefix}...${suffix}`;
  }
export {truncateString};