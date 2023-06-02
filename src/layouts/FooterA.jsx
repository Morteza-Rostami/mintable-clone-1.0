import React from 'react'
import styled from 'styled-components'

const lists = [
  {
    id: 1,
    title: 'My Acount',
    links: [
      {
        id: 1,
        name: 'Create a Store',
      },
      {
        id: 2,
        name: 'List an Item For',
      },
      {
        id: 3,
        name: 'Sale',
      },
      {
        id: 4,
        name: 'My Profile',
      },
      {
        id: 5,
        name: 'Browse Digital',
      },
      {
        id: 6,
        name: 'Items',
      }
    ]
  },
  {
    id: 2,
    title: 'Need Help?',
    links: [
      {
        id: 1,
        name: 'Create a Store',
      },
      {
        id: 2,
        name: 'List an Item For',
      },
      {
        id: 3,
        name: 'Sale',
      },
      {
        id: 4,
        name: 'My Profile',
      },
      {
        id: 5,
        name: 'Browse Digital',
      },
      {
        id: 6,
        name: 'Items',
      }
    ]
  },
  {
    id: 3,
    title: 'Buy an Item',
    links: [
      {
        id: 1,
        name: 'Create a Store',
      },
      {
        id: 2,
        name: 'List an Item For',
      },
      {
        id: 3,
        name: 'Sale',
      },
      {
        id: 4,
        name: 'My Profile',
      },
      {
        id: 5,
        name: 'Browse Digital',
      },
      {
        id: 6,
        name: 'Items',
      }
    ]
  },
  {
    id: 4,
    title: 'Go Pro',
    links: [
      {
        id: 1,
        name: 'Create a Store',
      },
      {
        id: 2,
        name: 'List an Item For',
      },
      {
        id: 3,
        name: 'Sale',
      },
      {
        id: 4,
        name: 'My Profile',
      },
      {
        id: 5,
        name: 'Browse Digital',
      },
      {
        id: 6,
        name: 'Items',
      }
    ]
  },
  {
    id: 5,
    title: 'Resources',
    links: [
      {
        id: 1,
        name: 'Create a Store',
      },
      {
        id: 2,
        name: 'List an Item For',
      },
      {
        id: 3,
        name: 'Sale',
      },
      {
        id: 4,
        name: 'My Profile',
      },
      {
        id: 5,
        name: 'Browse Digital',
      },
      {
        id: 6,
        name: 'Items',
      }
    ]
  },
  {
    id: 6,
    title: 'Legal',
    links: [
      {
        id: 1,
        name: 'Create a Store',
      },
      {
        id: 2,
        name: 'List an Item For',
      },
    ]
  },
]

const FooterA = () => {
  return (
    <footer
      className='
        container mx-auto
        flex flex-col-reverse gap-5
        text-white
        bg-slate-800
        py-10
        px-4
        pt-56

        md:flex-row
        md:justify-center
        md:gap-10
      '
    >
      {/* left: logo and social */}
      <div
        className='
          flex flex-col gap-4
        '
      >
        <div
          className='
            flex items-center gap-2
            font-semibold
          '
        >
          <img 
            src="https://www.mintable.app/static/media/mintable-logo-new.e2bd394114ffcecad16c.png" 
            alt="logo"   
            style={{
              maxWidth: '40px'
            }}
          />
          <span>
            Mintable
          </span>
        </div> {/* logo */}
          
        {/* social media */}
        <div
          className='
            flex flex-col gap-4 items-start
          '
        >
          <h7
            className='
              text-sm text-center font-bold
            '
          >
            Join Our Community
          </h7>
          <CssMedia
            className='
            '
          >
            <a 
              href='#'
              /* style={{
                flexBasis: '50%',
              }} */
            >
            <svg 
              style={{fill: 'white', width: '24px'}}
              width="21" 
              height="17" 
              viewBox="0 0 21 17" 
              fill="current" xmlns="http://www.w3.org/2000/svg" class="socialsharing_icon__i-tZ+ twitter" stroke="current" stroke-width="current"><path d="M20.416 2.01651C19.6805 2.35727 18.8904 2.58752 18.0598 2.69159C18.9169 2.15539 19.558 1.31147 19.8637 0.317296C19.0585 0.81738 18.1773 1.16939 17.2583 1.35801C16.6403 0.668066 15.8217 0.210762 14.9296 0.057094C14.0376 -0.0965741 13.122 0.0619913 12.325 0.508172C11.5279 0.954353 10.8941 1.66319 10.5219 2.52462C10.1496 3.38606 10.0598 4.35189 10.2663 5.27219C8.63471 5.18653 7.03861 4.74313 5.58154 3.97075C4.12448 3.19837 2.83902 2.11428 1.8086 0.78884C1.45627 1.42432 1.25368 2.16111 1.25368 2.94578C1.25329 3.65217 1.41966 4.34774 1.73803 4.97078C2.0564 5.59382 2.51692 6.12505 3.07875 6.51736C2.42718 6.49568 1.78999 6.31159 1.22021 5.98042V6.03568C1.22014 7.02642 1.5479 7.98667 2.14788 8.7535C2.74785 9.52033 3.58308 10.0465 4.51185 10.2427C3.90741 10.4138 3.27371 10.439 2.65859 10.3164C2.92064 11.1689 3.43107 11.9143 4.11844 12.4484C4.80581 12.9825 5.63571 13.2785 6.49194 13.2949C5.03844 14.4879 3.24336 15.1351 1.39549 15.1322C1.06816 15.1323 0.741107 15.1123 0.416016 15.0724C2.29171 16.3334 4.47515 17.0026 6.7051 17C14.2538 17 18.3804 10.4629 18.3804 4.79328C18.3804 4.60908 18.376 4.42304 18.3681 4.23884C19.1708 3.63189 19.8637 2.8803 20.4143 2.01927L20.416 2.01651Z" fill="current"></path></svg>
            </a>
            <a
              href='#'
              /* style={{
                flexBasis: '50%'
              }} */
            >
            <svg 
              style={{fill: 'white', width: '24px'}}
              width="19" 
              height="17" 
              viewBox="0 0 19 17" fill="current" xmlns="http://www.w3.org/2000/svg" class="socialsharing_icon__i-tZ+ reddit" stroke="current" stroke-width="current"><path d="M16.6901 6.51015C16.121 6.51015 15.6202 6.74537 15.2522 7.11337C13.8978 6.1763 12.073 5.57309 10.0509 5.50859L11.1018 0.773934L14.4479 1.52511C14.4479 2.34457 15.1156 3.01227 15.9351 3.01227C16.7697 3.01227 17.4413 2.3256 17.4413 1.50614C17.4413 0.686677 16.7735 0 15.9351 0C15.3508 0 14.8463 0.352823 14.5959 0.834635L10.9007 0.0151752C10.7148 -0.0341442 10.5327 0.0986388 10.4834 0.284535L9.33003 5.5048C7.32309 5.58826 5.51723 6.19148 4.15903 7.12854C3.79103 6.74537 3.27128 6.51015 2.7022 6.51015C0.592828 6.51015 -0.0976502 9.34033 1.83341 10.3077C1.76512 10.6075 1.73477 10.9261 1.73477 11.2448C1.73477 14.424 5.31615 17 9.71321 17C14.1292 17 17.7106 14.424 17.7106 11.2448C17.7106 10.9261 17.6765 10.5923 17.593 10.2926C19.4861 9.32136 18.7881 6.51015 16.6901 6.51015ZM4.89504 10.5088C4.89504 9.67418 5.56275 9.00268 6.40119 9.00268C7.22066 9.00268 7.88837 9.67039 7.88837 10.5088C7.88837 11.3283 7.22066 11.996 6.40119 11.996C5.56655 11.9998 4.89504 11.3283 4.89504 10.5088ZM13.0252 14.056C11.6443 15.437 7.748 15.437 6.36705 14.056C6.21529 13.9232 6.21529 13.688 6.36705 13.5363C6.49983 13.4035 6.73505 13.4035 6.86783 13.5363C7.92252 14.6175 11.4204 14.6365 12.5206 13.5363C12.6534 13.4035 12.8886 13.4035 13.0214 13.5363C13.177 13.688 13.177 13.9232 13.0252 14.056ZM12.9949 11.9998C12.1754 11.9998 11.5077 11.3321 11.5077 10.5126C11.5077 9.67797 12.1754 9.00647 12.9949 9.00647C13.8295 9.00647 14.501 9.67418 14.501 10.5126C14.4972 11.3283 13.8295 11.9998 12.9949 11.9998Z" fill="current"></path></svg>
            </a>
            <a
              href='#'
              /* style={{
                flexBasis: '100%'
              }} */
            >
            <svg 
              style={{fill: 'white', width: '24px'}}
              width="29" 
              height="22" 
              viewBox="0 0 29 22" fill="current" xmlns="http://www.w3.org/2000/svg" class="socialsharing_icon__i-tZ+ discord" stroke="current" stroke-width="current"><path d="M23.7379 1.81672C21.9239 0.968018 19.9843 0.351214 17.9566 0C17.7075 0.450244 17.4166 1.05583 17.216 1.53757C15.0604 1.2134 12.9247 1.2134 10.8088 1.53757C10.6082 1.05583 10.3107 0.450244 10.0594 0C8.02944 0.351214 6.08764 0.970284 4.27368 1.82122C0.614914 7.3501 -0.376918 12.7416 0.118999 18.0566C2.54569 19.8688 4.89744 20.9697 7.2095 21.6901C7.78037 20.9044 8.2895 20.0692 8.7281 19.189C7.89276 18.8716 7.09269 18.4799 6.33671 18.0251C6.53727 17.8766 6.73345 17.7212 6.92298 17.5614C11.5339 19.718 16.5438 19.718 21.0996 17.5614C21.2914 17.7212 21.4875 17.8766 21.6859 18.0251C20.9277 18.4821 20.1254 18.8738 19.2901 19.1913C19.7287 20.0692 20.2356 20.9066 20.8087 21.6923C23.1229 20.9719 25.4769 19.8711 27.9036 18.0566C28.4855 11.8952 26.9095 6.55317 23.7379 1.81672ZM9.35628 14.788C7.97213 14.788 6.83701 13.4958 6.83701 11.9222C6.83701 10.3486 7.94789 9.05423 9.35628 9.05423C10.7647 9.05423 11.8998 10.3464 11.8755 11.9222C11.8777 13.4958 10.7647 14.788 9.35628 14.788ZM18.6663 14.788C17.2822 14.788 16.147 13.4958 16.147 11.9222C16.147 10.3486 17.2579 9.05423 18.6663 9.05423C20.0747 9.05423 21.2098 10.3464 21.1856 11.9222C21.1856 13.4958 20.0747 14.788 18.6663 14.788Z"></path></svg>
            </a>
          </CssMedia>
        </div>

      </div> {/* left */}

      {/* lists of links */}
      <div
        className='
          flex flex-col gap-4

          md:gap-8
          md:flex-row
        '
      >
        {
          lists.length
          ? (
            lists.map(list => {
              return <LinkList
                key={list.id}
                list={list}
              />
            })
          )
          : ('')
        }
      </div>
    </footer>
  )
}

// list of links
const LinkList = ({
  list
}) => {
  return (
    <div
      className='
        flex flex-col gap-3
      '
    >
      <h6
        className='
          font-bold font-base
        '
      >
        {list.title}
      </h6>
      <ul
        className='
          flex flex-col
        '
      >
        {
          list.links.length
          ? (
            list.links.map(link => {
              return <a 
                className='
                  text-sm
                  hover:underline
                '
                key={link.id}
                href="#"
              >
                {link.name}
              </a>
            })
          )
          : ('')
        }
      </ul>
    </div>
  )
}

/* style */

const CssMedia = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    width: 34px;
    height: 34px;
    border-radius: 50%;
  }
`

export default FooterA
