import { FaTelegram, FaClock } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import ms from "ms";
import { IScraper } from "@/models/Scraper";
import { Tooltip } from "../ui/Tooltip/Tooltip";
import { Button } from "../ui/Button/Button";
import { useAuth } from "@/hooks/useAuth";
import { LazyAccordion } from "../ui/LazyAccordion/LazyAccordion";
import {
  ScraperWidget,
  ScraperWidgetProps,
} from "../ScraperWidget/ScraperWidget";
import { useMemo } from "react";
import { Box } from "../ui/Box/Box";
import { Modal } from "../ui/Modal/Modal";
import { useModal } from "@/hooks/useModal";

interface ScraperCardProps {
  scraper: IScraper;
  widget?: ScraperWidgetProps["widget"];
}

const ScraperCard = ({ scraper, widget }: ScraperCardProps) => {
  const { user } = useAuth();
  const { pathname } = useLocation();
  const { openModal, closeModal } = useModal();

  const atPage = useMemo(() => pathname.includes(scraper.knownId), [pathname]);

  const handleModal = () => {
    openModal({
      name: "deactivate",
      element: (
        <Modal onClose={closeModal}>
          <Modal.Header>Deactivate scraper</Modal.Header>
          <Modal.Body>
            <Modal.Text>
              Are you sure you want to deactivate this scraper?
            </Modal.Text>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Button onClick={closeModal} variant="secondary-outline">
              Cancel
            </Modal.Button>
            <Modal.Button variant="danger">Deactivate</Modal.Button>
          </Modal.Footer>
        </Modal>
      ),
    });
  };

  return (
    <>
      <Box
        data-onitsown={atPage}
        className="format max-w-sm data-[onitsown='true']:max-w-none"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {scraper.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {scraper.description}
        </p>
        <div className="flex flex-row items-center gap-6">
          {scraper.status === "active" && (
            <div>
              <span className="inline-flex mx-1 w-3 h-3 bg-green-500 rounded-full"></span>
              <span>Active</span>
            </div>
          )}
          {scraper.shouldNotifyChanges && (
            <div className="flex flex-row items-center gap-1">
              <FaTelegram />
              <span>Notifies changes</span>
            </div>
          )}
          <Tooltip
            text={`Scraper runs every ${ms(scraper.interval * 1000, {
              long: true,
            })} `}
          >
            <div className="flex flex-row items-center gap-1">
              <FaClock />
              <span>{ms(scraper.interval * 1000)}</span>
            </div>
          </Tooltip>
        </div>

        <div className="flex flex-row flex-wrap justify-start gap-4 items-center mt-4 mb-4">
          {!atPage ? (
            <Link className="no-underline" to={`/scraper/${scraper.knownId}`}>
              <Button disabled={!user}>Manage scraper</Button>
            </Link>
          ) : (
            <Button disabled={!user || user.role !== "pyro"}>Scrape now</Button>
          )}
          <Button variant="primary-outline" disabled={!user}>
            See runs
          </Button>
        </div>
        {atPage && (
          <a
            className="text-blue-600 dark:text-blue-500 inline-block"
            href={scraper.url}
            target="_blank"
            rel="noreferrer"
          >
            Go to scraped page
          </a>
        )}
        {atPage && (
          <div className="flex flex-col mt-4 gap-4">
            <LazyAccordion summary="Advanced options">
              <a className="text-red-700 cursor-pointer" onClick={handleModal}>
                Deactivate
              </a>
            </LazyAccordion>
          </div>
        )}
        {widget && (
          <LazyAccordion summary="Show Widget">
            <ScraperWidget widget={widget} />
          </LazyAccordion>
        )}
      </Box>
    </>
  );
};

export { ScraperCard };
