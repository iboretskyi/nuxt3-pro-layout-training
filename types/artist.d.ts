interface SocialMediaFollowers {
  instagram: number;
  twitter: number;
}

interface NFTs {
  totalSold: number;
  totalRevenue: number;
}

interface Artist {
  name: string;
  artStyle: string;
  activeYears: string;
  notableWorks: string[];
  socialMediaFollowers: SocialMediaFollowers;
  isHovered: boolean;
  nfts: NFTs;
}