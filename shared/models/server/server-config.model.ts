import { ClientScriptJSON } from '../plugins/plugin-package-json.model'
import { NSFWPolicyType } from '../videos/nsfw-policy.type'
import { VideoPrivacy } from '../videos/video-privacy.enum'
import { BroadcastMessageLevel } from './broadcast-message-level.type'

export interface ServerConfigPlugin {
  name: string
  npmName: string
  version: string
  description: string
  clientScripts: { [name: string]: ClientScriptJSON }
}

export interface ServerConfigTheme extends ServerConfigPlugin {
  css: string[]
}

export interface RegisteredExternalAuthConfig {
  npmName: string
  name: string
  version: string
  authName: string
  authDisplayName: string
}

export interface RegisteredIdAndPassAuthConfig {
  npmName: string
  name: string
  version: string
  authName: string
  weight: number
}

export interface ServerConfig {
  serverVersion: string
  serverCommit?: string

  client: {
    videos: {
      miniature: {
        displayAuthorAvatar: boolean
        preferAuthorDisplayName: boolean
      }
      resumableUpload: {
        maxChunkSize: number
      }
    }

    menu: {
      login: {
        redirectOnSingleExternalAuth: boolean
      }
    }
  }

  defaults: {
    publish: {
      downloadEnabled: boolean
      commentsEnabled: boolean
      privacy: VideoPrivacy
      licence: number
    }

    p2p: {
      webapp: {
        enabled: boolean
      }

      embed: {
        enabled: boolean
      }
    }
  }

  webadmin: {
    configuration: {
      edition: {
        allowed: boolean
      }
    }
  }

  instance: {
    name: string
    shortDescription: string
    isNSFW: boolean
    defaultNSFWPolicy: NSFWPolicyType
    defaultClientRoute: string
    customizations: {
      javascript: string
      css: string
    }
  }

  search: {
    remoteUri: {
      users: boolean
      anonymous: boolean
    }

    searchIndex: {
      enabled: boolean
      url: string
      disableLocalSearch: boolean
      isDefaultSearch: boolean
    }
  }

  plugin: {
    registered: ServerConfigPlugin[]

    registeredExternalAuths: RegisteredExternalAuthConfig[]

    registeredIdAndPassAuths: RegisteredIdAndPassAuthConfig[]
  }

  theme: {
    registered: ServerConfigTheme[]
    default: string
  }

  email: {
    enabled: boolean
  }

  contactForm: {
    enabled: boolean
  }

  signup: {
    allowed: boolean
    allowedForCurrentIP: boolean
    requiresEmailVerification: boolean
    requiresApproval: boolean
    minimumAge: number
  }

  transcoding: {
    hls: {
      enabled: boolean
    }

    webtorrent: {
      enabled: boolean
    }

    enabledResolutions: number[]

    profile: string
    availableProfiles: string[]

    remoteRunners: {
      enabled: boolean
    }
  }

  live: {
    enabled: boolean

    allowReplay: boolean
    latencySetting: {
      enabled: boolean
    }

    maxDuration: number
    maxInstanceLives: number
    maxUserLives: number

    transcoding: {
      enabled: boolean

      remoteRunners: {
        enabled: boolean
      }

      enabledResolutions: number[]

      profile: string
      availableProfiles: string[]
    }

    rtmp: {
      port: number
    }
  }

  videoStudio: {
    enabled: boolean

    remoteRunners: {
      enabled: boolean
    }
  }

  import: {
    videos: {
      http: {
        enabled: boolean
      }
      torrent: {
        enabled: boolean
      }
    }
    videoChannelSynchronization: {
      enabled: boolean
    }
  }

  autoBlacklist: {
    videos: {
      ofUsers: {
        enabled: boolean
      }
    }
  }

  avatar: {
    file: {
      size: {
        max: number
      }
      extensions: string[]
    }
  }

  banner: {
    file: {
      size: {
        max: number
      }
      extensions: string[]
    }
  }

  video: {
    image: {
      size: {
        max: number
      }
      extensions: string[]
    }
    file: {
      extensions: string[]
    }
  }

  videoCaption: {
    file: {
      size: {
        max: number
      }
      extensions: string[]
    }
  }

  user: {
    videoQuota: number
    videoQuotaDaily: number
  }

  videoChannels: {
    maxPerUser: number
  }

  trending: {
    videos: {
      intervalDays: number
      algorithms: {
        enabled: string[]
        default: string
      }
    }
  }

  tracker: {
    enabled: boolean
  }

  followings: {
    instance: {
      autoFollowIndex: {
        indexUrl: string
      }
    }
  }

  broadcastMessage: {
    enabled: boolean
    message: string
    level: BroadcastMessageLevel
    dismissable: boolean
  }

  homepage: {
    enabled: boolean
  }
}

export type HTMLServerConfig = Omit<ServerConfig, 'signup'>
